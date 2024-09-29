export default function MastHead(props) {
    return(
        <div className="mastheadContainer">
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column mastheadStyle">
                <p className="masthead-subheading font-weight-light mb-0 titleStyle">Hi I'm,</p>
                <h1 className="masthead-heading text-uppercase mb-0 titleNameStyle">{props.firstName} {props.lastName}</h1>
                <p className="masthead-subheading font-weight-light mb-0 titleStyle">{props.title}</p>
                <p className="masthead-subheading font-weight-light mb-0 titleStyle">{props.slogan}</p>
            </div>
        </header>
        
        </div>
    )

}