import {Link} from "react-router-dom";

export default function ClassCard({id, name}){
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={"/students/" + id} className="card-link">Show Students</Link>
            </div>
        </div>
    );
}