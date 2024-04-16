import './cta.css'
const CTA = () => {
    return(
        <div className="gpt3__cta section__margin">
            <div className="gpt3__cta-container">
                <div className="gpt3__cta-container-header">
                    <p>Request Early Access to Get Started</p>
                    <h1>Register today & start exploring the endless possiblities.</h1>
                </div>  
            </div>
            <div className="gpt3__cta-container_button"> 
                <form action='https://openai.com/' method="get" target="_blank">
                    <button type="submit">Get started</button>
                 </form>        
            </div>  
        </div>

    );
}
export default CTA