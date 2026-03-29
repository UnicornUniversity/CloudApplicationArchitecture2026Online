import ClassCard from "./ClassCard";
import {DAO} from "../../data/DAO";
import {useEffect, useState} from "react";

export default function Classes() {

    const dao = new DAO();

    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        dao.readClasses().then((items) => setClassesData(items));
    }, []);

    return (
        <div className="card-group">
            {classesData.map((cls) =>
                <ClassCard id={cls.id} name={cls.name}/>
            )}
        </div>
    );
}