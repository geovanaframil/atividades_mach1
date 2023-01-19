import ButtonLink from "./ButtonLink";
import "./ArticlePreview.css"

function ArticlePreview({img, title, description, link}) {
    return (
        <div className="myArticle">
            <div>
                <img src={img} alt="Fotógrafo"/>
                <h2>{title}</h2>
                <p>{description}</p>
                <ButtonLink texto={link} link=""/>
            </div>
        </div>
    )
}

export default ArticlePreview