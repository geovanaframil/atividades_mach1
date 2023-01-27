import { NavLink } from "react-router-dom";
import "./ArticlePreview.css";

function ArticlePreview({ nome, imagem, conteudo, tipo }) {
  return (
    <div className="artigo">
      <span>{tipo}</span>
      <img src={imagem} />
      <h2>{nome}</h2>
      <p>{conteudo}</p>
      <NavLink to={`artigos/${nome}`}>Ver mais...</NavLink>
    </div>
  );
}

export default ArticlePreview;
