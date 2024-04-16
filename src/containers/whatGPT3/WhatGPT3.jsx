import './whatGPT3.css'
import Feature from '../../components/feature/Feature';
const WhatGPT3 = () => {
    let text_section1 = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.";
    let text_section2 = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b";
    return(
        <div className="gpt3__whatGPT3 gradient__bg section__padding" id="whatGPT3">
            <div className="gpt3__whatGPT3_dec-circle"></div>
            <div className="gpt3__whatGPT3-feature">
                <Feature title={"What is GPT-3"} text={text_section1}/>
            </div>
            <div className="gpt3__whatGPT3-header">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <a href="#blog">Explore The Library</a>
            </div>
            <div className="gpt3__whatGPT3_features-container">
                <Feature title={"Chatbots"} text={text_section2}/>
                <Feature title={"Knowledgebase"} text={text_section2}/>
                <Feature title={"Education"} text={text_section2}/>
            </div>
        </div>
    )
}
export default WhatGPT3