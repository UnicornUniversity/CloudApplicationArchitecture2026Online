const express = require("express");
const dml = require("../data/dataManagementLayer");

const router = express.Router();

// no magic numbers
const HTTP_SUCCESS = 200;
const HTTP_FAILURE = 400;

router.post("/add", async (req, res, next) => {

    // for debug
    // console.log(req.body);

    const output = {
        idStudent: req.body.idStudent,
        idSubject: req.body.idSubject,
        date: req.body.date,
        mark: req.body.mark
    };

    let status = HTTP_SUCCESS;

    let errorStr = "";
    const mark = parseInt(output.mark);
    if (mark < 1 || mark > 5) {
        errorStr = "Wrong mark value";
        status = HTTP_FAILURE;
    }

    if (errorStr.length === 0){
        const gradesExisted = await dml.readGrades();
        const gradesAll = [output, ...gradesExisted];
        await dml.saveGrades(gradesAll);
    }

    res.status(status);
    res.json({...output, errorStr: errorStr});
});

module.exports = router;