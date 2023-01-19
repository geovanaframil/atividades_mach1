import ButtonLink from "./ButtonLink";

function ArticlePreview({img, title, description, link}) {
    return (
        <div>
            <div>
                <img src={img} />
                <h2></h2>
                <p></p>
                <ButtonLink texto={link} link=""/>
            </div>
        </div>
    )
}

export default ArticlePreview