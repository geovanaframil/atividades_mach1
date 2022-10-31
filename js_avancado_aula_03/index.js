const nome = "Paulo";
const idade = "Paulo";

try {
  try {
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
    throw err;
  }
} catch (err) {
  console.log(err.toString());
}
