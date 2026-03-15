const express = require("express");
const dml = require("../data/dataManagementLayer");

const router = express.Router();

router.get("/list", async (req, res, next) => {
    res.json(await dml.readClasses());
});

module.exports = router;