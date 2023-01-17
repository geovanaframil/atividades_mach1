const nome = "Paulo";
const idade = "Paulo";

try {
  console.log("Iniciando o processamento");
  try {
    if (isNaN(idade)) {
      throw new Error("erro no idade");
    }
    if (!isNaN(nome)) {
      throw new Error("erro no nome");
    }
  } catch (err) {
    throw err;
  }
} catch (err) {
  console.error(err.toString());
} finally {
  console.log("Fim do processo");
}
