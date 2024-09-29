import PortSelection from './PortSelection.jsx'
import PortfolioData from '../Data/PortfolioData.js'

export default function Portfolio() {
    let portItems = PortfolioData.map(portItem => {
        return (
            <PortSelection
                key={portItem.id}
                image={portItem.portfolioImage}
                portName={portItem.portfolioName}
            
            />
        )
    })
    
    return(
        <div>
            <section className="page-section bg-primary portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 text-white">Portfolio</h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line "></div>
                        <div className="divider-custom-icon"><img src="./assets/img/logo/logo.png" alt="Logo" className="logoPic" /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="flex-style-port">
                        {portItems} 
                    </div>
                        
                </div>
            </section>
        </div>
    )
}