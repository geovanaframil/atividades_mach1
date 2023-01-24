import "./App.css";
import UsuarioItem from "./components/UsuarioItem";
import { useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([
    { nome: "usuario 1", estado: false },
    { nome: "usuario 2", estado: false },
    { nome: "usuario 3", estado: false },
  ]);

  const handleClick = (index) => {
    const usuariosMapeados = usuarios.map(usuario => ({...usuario, estado: false}))
    setUsuarios(usuariosMapeados)
  }

  return (
    <div>
      {usuarios.map((usuario, index) => (
        <UsuarioItem onClickItem={(posicao) => handleClick(posicao)} key={index} nome={usuario.nome} estado={usuario.estado}/>
      ))}
    </div>
  );
}

export default App;
