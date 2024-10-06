import React, { useState } from 'react';
import PortfolioData from '../Data/PortfolioData';
import PortfolioModal from './PortfolioModal'; // Import the modal component

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="page-section bg-primary portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 text-white">Portfolio</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <img src={props.image} alt="Logo" className="logoPic" />
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    {PortfolioData.map((project, index) => (
                        <div className="col-md-6 col-lg-4 mb-5" key={index}>
                            <div className="portfolio-item mx-auto" onClick={() => handleOpenModal(project)}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        <p>{project.name}</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={project.image} alt={project.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && selectedProject && (
                <PortfolioModal
                    project={selectedProject}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </section>
    );
}
