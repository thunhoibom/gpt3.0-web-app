import './article.css'
const Article = (props) => {
    // const navigate = useNavigate();
    function handleClick() {
        window.location.href = `${props.link}`; 
        // navigate("https://gemini.google.com/app");   
    }
    return(
        <div className="gpt3__article" onClick={handleClick}>
            <div className="gpt3__article-img">
                <img src={props.img}></img>
            </div>
            <div className="gpt3__article-content">
                <div>
                    <p>{props.date}</p>
                    <h2>{props.title}</h2>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
}
export default Article