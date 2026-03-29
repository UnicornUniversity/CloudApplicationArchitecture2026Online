import {Outlet, Link} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/classes"} className="nav-link active">Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/students"} className="nav-link active">Students</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}