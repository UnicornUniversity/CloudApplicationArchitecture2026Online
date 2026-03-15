function getById(allStudents, allClasses, id){
    const student = allStudents.find((st) => parseInt(st.id) === id);
    if (student != null){
        // student.class is name of property in persons.json
        const idClass = parseInt(student.class);
        const cls = allClasses.find((cl) => parseInt(cl.id) === idClass);
        if (cls != null) {
            student.className = cls.name;
            // TODO convert DOB to another format
        }
    }

    return student;
}

module.exports.studentGetById = getById;