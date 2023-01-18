import "./App.css";
import Header from "./components/Header";
import Lista from "./components/Lista";
import TextoPrincipal from "./components/TextoPrincipal";

function App() {
  return (
    <div>
      <Header />
      <TextoPrincipal />
      <Lista textos={["home", "contato", "sobre"]}/>

    </div>
  );
}

export default App;
