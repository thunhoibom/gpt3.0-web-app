import './feature.css'
const Feature = ({title, text}) => {
    return(
       <div className='gpt3__features-container'>
            <div className="gpt3__features-container_title">
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container_space"></div>
            <div className="gpt3__features-container_text">
                <p>{text}</p>
            </div>
       </div>
    )
}
export default Feature