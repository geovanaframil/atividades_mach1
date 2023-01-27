import { useParams } from "react-router-dom";

function ArtigoDetalhe() {
  const { nome } = useParams();
  const listaArtigos = [
    {
      nome: "Artigo 1",
      imagem: "./logo192.png",
      conteudo: "qualquer coisa",
      tipo: "qualquer coisa",
    },
    {
      nome: "Artigo 2",
      imagem: "./logo192.png",
      conteudo: "qualquer coisa",
      tipo: "qualquer coisa",
    },
    {
      nome: "Artigo 3",
      imagem: "./logo192.png",
      conteudo: "qualquer coisa",
      tipo: "qualquer coisa",
    },
  ];

  const artigoAtual = listaArtigos.find((artigo) => artigo.nome == nome);

  return (
    <div className="artigo">
      <span>{artigoAtual.nome}</span>
      <img />
      <h2></h2>
      <p></p>
    </div>
  );
}

export default ArtigoDetalhe;
