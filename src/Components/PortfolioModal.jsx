import React from 'react';

export default function PortfolioModal({ project, handleCloseModal }) {
    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog modal-xl">
                <div className="modal-content" style={{ border:"5px solid rgba(211, 90, 16, 255)" } }>
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
                                    
                                    <img className="img-fluid rounded mb-5" src={project.image} alt={project.name} />
                                    <h5>Description</h5>
                                    <p className="mb-4">{project.description}</p>
                                    <h5>Technologies</h5>
                                    <p className="mb-4">{project.tech}</p>
                                    <h5>Tools</h5>
                                    <p className="mb-4">{project.tools}</p>
                                    <h5>Platform</h5>
                                    <p className="mb-4">{project.platform}</p>
                                    <div className="modalButtonStyle">
                                        <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                                Visit Project
                                        </a>
                                        <button className="btn btn-secondary mt-3 modalButtonStyleAlt" onClick={handleCloseModal}>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
