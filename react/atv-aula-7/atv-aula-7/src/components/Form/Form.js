/* eslint-disable no-useless-escape */
import { useState } from "react";
import Message from "./Message";
import "./style.css";

function invalidoNome(nome) {
  if (nome.length >= 3) {
    return false;
  }
  return true;
}
function invalidaSenha(senha) {
  if (senha.length >= 6) {
    return false;
  }
  return true;
}
function invalidoEmail(email) {
  return !email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function Form() {
  const info = {
    title: "Cadastro",
  };
  const [formValido, setFormValido] = useState(false);
  const [formData, setFormData] = useState({
    nome: {
      valor: "",
      invalido: false,
    },
    email: {
      valor: "",
      invalido: false,
    },
    senha: {
      valor: "",
      invalido: false,
    },
  });

  const salvarValorCampo = (e) => {
    const { name, value } = e.target;
    let invalido = false;
    if (name === "nome") {
      invalido = invalidoNome(value);
    } else if (name === "senha") {
      invalido = invalidaSenha(value);
    } else if (name === "email") {
      invalido = invalidoEmail(value);
    }
    setFormData({
      ...formData,
      [name]: {
        valor: value,
        invalido: invalido,
      },
    });

    if (
      formData.nome.invalido ||
      formData.email.invalido ||
      formData.senha.invalido ||
      formData.nome.valor === "" ||
      formData.email.valor === "" ||
      formData.senha.valor === ""
    ) {
      setFormValido(false);
    } else {
      setFormValido(true);
    }
  };

  const removerMensagem = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: {
        valor: value,
        invalido: false,
      },
    });
  };

  const salvarDados = (e) => {
    e.preventDefault();
    if (formValido) {
      console.log("pegar dados", formData);
    }
  };

  return (
    <form action="" className="formulario" onSubmit={salvarDados}>
      <h2>{info.title}</h2>
      <fieldset>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome.valor}
          onFocus={removerMensagem}
          onChange={salvarValorCampo}
        />
        <Message exibir={formData.nome.invalido} campo="Nome" />
      </fieldset>
      <fieldset>
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email.valor}
          onFocus={removerMensagem}
          onChange={salvarValorCampo}
        />
        <Message exibir={formData.email.invalido} campo="Email" />
      </fieldset>
      <fieldset>
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          value={formData.senha.valor}
          onFocus={removerMensagem}
          onChange={salvarValorCampo}
        />
        <Message exibir={formData.senha.invalido} campo="Senha" />
      </fieldset>
      <input type="submit" value="Registrar" disabled={!formValido} />
    </form>
  );
}

export default Form;
