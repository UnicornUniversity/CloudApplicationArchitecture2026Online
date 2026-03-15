const fs = require("fs/promises");
const path = require("path");

const rootPath = path.dirname(process.mainModule.filename);
const dataPath = path.join(rootPath, "data");

console.log("rootPath = " + rootPath);
console.log("dataPath = " + dataPath);

// consts for entity names
const CLASSES = "classes.json";
const SUBJECTS = "subjects.json";
const STUDENTS = "persons.json";
const GRADES = "grades.json";

async function readDataRoutines(entityName) {
    const rawContent = await fs.readFile(path.join(dataPath, entityName));
    return JSON.parse(rawContent);
}

async function saveDataRoutines(entityName, items) {
    return await fs.writeFile(path.join(dataPath, entityName), JSON.stringify(items));
}

async function readClasses() {
    return await readDataRoutines(CLASSES);
}

async function readSubjects() {
    return await readDataRoutines(SUBJECTS);
}

async function readStudents() {
    return await readDataRoutines(STUDENTS);
}

async function readGrades() {
    return await readDataRoutines(GRADES);
}

async function saveGrades(allGrades) {
    await saveDataRoutines(GRADES, allGrades);
}

module.exports.readClasses = readClasses;
module.exports.readSubjects = readSubjects;
module.exports.readStudents = readStudents;
module.exports.readGrades = readGrades;
module.exports.saveGrades = saveGrades;



