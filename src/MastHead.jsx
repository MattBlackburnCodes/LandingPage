export default function MastHead() {
    return(
        <div>
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5 profilePic" src="./assets/img/portfolio/ProfileChibi.png" alt="Anime Profile Picture" />
                <h1 className="masthead-heading text-uppercase mb-0">Matt Blackburn</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <img src="./assets/img/logo/logo.png" alt="Logo" className="logoPic" />
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Transforming Ideas into Digital Solutions</p>
                <p className="masthead-subheading font-weight-light mb-0">IT Consultant - Front-End Web Developer - Technical Support and Solutions Lead</p>
            </div>
        </header>
        </div>
    )

}