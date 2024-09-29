export default function About(props) {
    return (
        <div>
            <section className="page-section text-black mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase">About</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <img src="./assets/img/logo/logo.png" alt="Logo" className="logoPic" />
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row text-black">
                        <p className="lead">
                            Hi, I’m {props.firstName} {props.lastName}, a {props.title} with a passion for creating dynamic and user-friendly digital experiences. With over 15 years in IT and a BS in Computer Science from Colorado Technical University, I’ve transitioned from tech support to web development, specializing in HTML, CSS, JavaScript, and React. I love turning ideas into seamless, responsive websites that offer great user experiences.
                        </p>
                        <p className="lead">
                            I’m constantly learning and staying ahead with tools like Bootstrap, Vite, and Node.js, while my Scrum Master certification helps me manage projects efficiently. I’m always looking to collaborate on new, exciting projects and help businesses elevate their online presence.
                        </p>
                        <p className="lead">
                            Curious to learn more about my experience and skills? Check out my resume or scroll down to explore my portfolio!
                        </p>
                    </div>
                    <div className="text-center mt-4">
                        <button className="aboutButton">
                        <a className="btn btn-xl btn-outline-dark" href="./Resume/Front-End Developer Matt Blackburn.pdf">
                            <i className="fas fa-download me-2"></i>
                            Download My Resume!
                        </a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
