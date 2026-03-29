const express = require("express");
const dml = require("../data/dataManagementLayer");
const studentHelper = require("../bl/studentHelper");

const router = express.Router();

router.get("/get/:idStudent", async (req, res, next) => {
    const allStudents = await dml.readStudents();
    const allClasses = await dml.readClasses();
    res.json(studentHelper.studentGetById(allStudents, allClasses, parseInt(req.params.idStudent)));
});

router.get("/class/:id", async (req, res, next) => {
    res.json(studentHelper.getStudentsByClass(await dml.readStudents(), parseInt(req.params.id)));
});




module.exports = router;