import { Outlet, Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <header className="nav-holder make-sticky">
                        <div className="navbar navbar-light bg-white navbar-expand-lg py-0" id="navbar">
                            <div className="container py-3 py-lg-0 px-lg-0">
                                <a className="navbar-brand" href="index.html">
                                    <img className="d-none d-md-inline-block" src="img/logo.png" alt="Universal logo" /><img
                                        className="d-inline-block d-md-none" src="img/logo-small.png" alt="Universal logo" /><span
                                            className="sr-only">Universal - go to homepage</span></a>

                                <button className="navbar-toggler text-primary border-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation"><span className="sr-only">Toggle navigation</span><i
                                        className="fas fa-align-justify"></i></button>

                                <div className="collapse navbar-collapse" id="navigationCollapse">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shop</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Cart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Checkout</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Register</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="bg-pentagon py-4">
                        <div className="container py-3">
                            <div className="row d-flex align-items-center gy-4">
                                <div className="col-12">
                                    <h1 className="h2 mb-0 text-uppercase"></h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Outlet />
            <footer>
                <div class="bg-dark py-5">
                    <div class="container">
                        <div class="row align-items-cenrer gy-3 text-center">
                            <div class="col-md-6 text-md-start">
                                <p class="mb-0 text-sm text-gray-500">&copy; 2022. The easylearn academy </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}
export default Menu