export default function About() {
    return (
        <div>
            <section className="page-section text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase">About</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <img src="./assets/img/logo/logo.png" alt="Logo" className="logoPic" />
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row text-white">
                        <p className="lead">
                            Hello! I'm Matt Blackburn, an experienced IT professional and a passionate Front-End Web Developer. With a background that includes roles such as Lead End User Analyst and Desktop Support Specialist, I have honed my skills in system administration, network management, and customer support. Now, as a web developer, I leverage my expertise in complex tech environments, problem-solving, and software/hardware integration to create engaging and user-friendly web applications.
                        </p>
                    </div>
                    <p className="lead">
                        Currently, I'm deepening my knowledge in HTML, CSS, JavaScript, React, Python, PowerShell, and more. I bring a unique blend of administrative and creative insights to my projects, ensuring both functionality and aesthetics. I hold a BS in Computer Science from Colorado Technical University and actively enhance my skills through platforms like The Odin Project, Scrimba, and W3Schools. I am a certified Scrum Master and adept at using Scrum and Agile frameworks to manage projects effectively and deliver high-quality results.
                    </p>
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="./Resume/Front-End Developer Matt Blackburn.pdf">
                            <i className="fas fa-download me-2"></i>
                            Download My Resume!
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
