import ArticlePreview from "../components/ArticlePreview";

function Artigos() {
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
  return (
    <div className="Artigo">
      {listaArtigos.map((artigo) => (
        <ArticlePreview
          nome={artigo.nome}
          imagem={artigo.imagem}
          conteudo={artigo.conteudo}
          tipo={artigo.tipo}
        />
      ))}
    </div>
  );
}

export default Artigos;
