import { Outlet,Like} from "react-router-dom";
function Menu(){
    return(
        <div>
            <div className="container-fluid">
                <div className="row bg-warning">
                    <div className="col-12 offset-4 ">
                        <ul className="nav m-3 ">
                            <li className="nav-item">
                                <Like className="nav-link" to="/">Home</Like>
                            </li>
                            <li className="nav-item">
                                <Like className="nav-link" to="/About">About us</Like>
                            </li>
                            <li className="nav-item">
                                <Like className="nav-link" to="/Blog">Blog</Like>
                            </li>
                            <li className="nav-item">
                                <Like className="nav-link" to="Contact">Contact</Like>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
            <Outlet/>
            <div className="container-fluid bg-success text-white">
                <div className="row">
                        <h6>Email: jaysinhlimbad1122000</h6>
                </div>
            </div>
        </div>
    );
}
export default Menu