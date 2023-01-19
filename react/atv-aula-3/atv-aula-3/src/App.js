import MainHeader from "./components/MainHeader";
import ArticlePreview from "./components/ArticlePreview";
import "./App.css";

function App() {
  return (
    <div>
      <MainHeader link1="Home" link2="Sobre" link3="Contato" />
      <div className="containerArticles">
        <ArticlePreview
          img={"./foto.jpg"}
          title="My Title"
          description="dsbiwhbfbpibpiwb"
          link="Leia mais..."
        />
        <ArticlePreview
          img={"./foto.jpg"}
          title="My Title"
          description="dsbiwhbfbpibpiwb"
          link="Leia mais..."
        />
        <ArticlePreview
          img={"./foto.jpg"}
          title="My Title"
          description="dsbiwhbfbpibpiwb"
          link="Leia mais..."
        />
      </div>
    </div>
  );
}

export default App;
