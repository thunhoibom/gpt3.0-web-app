import './possibility.css'
import possibility from '../../assets/possibility.png'
const Possibility = () => {
    return(
        <div id="possibility" className="gpt3__possibility section__padding">
            <div className='gpt3__possibility-image'>
                <img src={possibility} alt="vr glasses"></img>
            </div>    
            <div className="gpt3__possibility_features-container">
                <a>Request Early Access to Get Started</a>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <a>Request Early Access to Get Started</a>
            </div>
        </div>
    )
}
export default Possibility