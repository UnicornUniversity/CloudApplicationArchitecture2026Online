function getById(allStudents, allClasses, id) {
    const student = allStudents.find((st) => parseInt(st.id) === id);
    if (student != null) {
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

function getStudentsByClass(allStudents, idClass) {
    const studentsForClass = allStudents.filter((st) => parseInt(st.class) === parseInt(idClass));
    return studentsForClass.map((st) => {
            return {
                id: st.id,
                name: st.name,
                dob: st.dob
                // TODO name of class, DOB in some format
            };
        }
    )
}

module.exports.studentGetById = getById;
module.exports.getStudentsByClass = getStudentsByClass;