export default function PortSection(props) {
    return(
            <div className="port-item-style">
                <div className="">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <p>{props.portName}</p>
                            </div>
                        </div>
                        <div>
                            <img className="img-fluid" src={props.image} alt={props.portName} />
                        </div>
                            
                    </div>
                </div>
            </div>
    )
}