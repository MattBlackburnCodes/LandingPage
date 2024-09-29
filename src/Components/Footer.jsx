export default function Footer() {
    return(
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            DMV area
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4 aroundTheWorld">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1 icon" href="https://www.linkedin.com/in/matt-blackburn-577495213"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1 icon" href="https://github.com/MattBlackburnCodes"><i className="fab fa-fw fa-github"></i></a>
                    </div>
                    
                    
                </div>
            </div>
        </footer>
    )
}