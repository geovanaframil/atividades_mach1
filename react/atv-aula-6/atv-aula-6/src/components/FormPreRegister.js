function FormPreRegister() {
  const enviarDados = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let mensagem = "";
    const arrValores = ["categoria", "email", "sexo", "termos"];
    arrValores.forEach((key) => {
      const value = formData.get(key);
      if (!value) {
        mensagem += `${key} `;
      }
    });
    if (mensagem !== "") {
      alert(`Esses campos estão vazios: ${mensagem}`);
    }
  };

  return (
    <form onSubmit={enviarDados}>
      <h1>PRÉ CADASTRO</h1>
      <div>
        <h4>Categoria</h4>
        <label htmlFor="aluno">Aluno</label>
        <input name="categoria" type="radio" value="aluno" />

        <label htmlFor="professor">Professor</label>
        <input name="categoria" type="radio" value="professor" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
      </div>

      <div>
        <label htmlFor="sexo">Sexo</label>
        <select name="sexo">
          <option defaultValue="masculino">Masculino</option>
          <option defaultValue="feminino">Feminino</option>
        </select>
      </div>

      <div>
        <input name="termos" type="checkbox" defaultValue="Aceito" /> Aceito os
        termos de uso
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
}

export default FormPreRegister;
