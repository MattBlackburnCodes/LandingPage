import React from 'react';

export default function PortfolioModal({ project, handleCloseModal }) {
    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                        {project.name}
                                    </h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <img src="./assets/img/logo/logo.png" alt="Logo" className="logoPic" />
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src={project.image} alt={project.name} />
                                    <p className="mb-4">{project.description}</p>
                                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Visit Project
                                    </a>
                                    <button className="btn btn-secondary mt-3" onClick={handleCloseModal}>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
