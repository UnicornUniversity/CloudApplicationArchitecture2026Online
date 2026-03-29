import {DAO} from "../../data/DAO";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StudentsFilter from "../shared/StudentsFilter";

export default function Students() {

    const dao = new DAO();

    const params = useParams();
    const idClassDefault = 1;

    const [classesData, setClassesData] = useState([]);
    const [subjectsData, setSubjectsData] = useState([]);
    const [studentsData, setStudentsData] = useState([]);
    const [idClass, setIdClass] = useState(params.idClass === undefined ? idClassDefault : parseInt(params.idClass));

    useEffect(() => {
        dao.readClasses().then((items) => setClassesData(items));
        dao.readSubjects().then((items) => setSubjectsData(items));
    }, []);

    useEffect(() => {
        dao.readStudents(idClass).then((items) => setStudentsData(items));
    }, [idClass]);

    return (
        <>
            <div className="row">
                <StudentsFilter classesList={classesData}
                                currentIdClass={idClass}
                                classesHandler={setIdClass}
                                subjectsList={subjectsData}
                                isSubjectsVisible={false}/>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        studentsData.map((st) =>
                            <tr>
                                <th scope="row">{st.id}</th>
                                <td>{st.name}</td>
                                <td>{st.dob}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}