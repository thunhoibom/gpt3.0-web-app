import './footer.css';
import Logo from '../../assets/logo.svg';
const Footer = () => {
    return(
        <div className="gpt3__footer section__padding">
            <h1 className="gradient__text">Do you want to step into the future before others</h1>
            <a href="https://auth0.openai.com/u/login/identifier?state=hKFo2SB0QzRBZWlmSnlJdkdrMVdLTmVWM2R4ZlN1U194dEVjNKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEk1NDhQdUNGdXVQRFI0X3d1LXp4ZGlPM3VhTERDbi0xo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q">
                <div className="gradient-border">
                    <button type="submit">Request Early Access</button>
                </div>
            </a>
            <div className="gpt3__footer-container">
                <div className="gpt3__footer-GPT3">
                    <img src={Logo} alt="gpt3"/><br/>
                    <p>Crechterwoord K12 182 DK<br></br> Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links">
                    <h4>Links</h4><br/>
                    <a>Overons</a><br/>
                    <a>Social Media</a><br/>
                    <a>Counters</a><br/>
                    <a>Contact</a>
                </div>
                <div className="gpt3__footer-company">
                    <h4>Company</h4><br/>
                    <a>Terms & Conditions</a><br/>
                    <a>Privacy Policy</a><br/>
                    <a>Contact</a><br/>
                </div>
                <div className="gpt3__footer-getInTouch">
                    <h4>Get In Touch</h4><br/>
                    <a>Crechterwoord K12<br/> 182 DK Alknjkcb</a><br/>
                    <a>085-132567</a><br/>
                    <a>jguyene@gmail.com</a>
                </div>
            </div>
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    )
}
export default Footer