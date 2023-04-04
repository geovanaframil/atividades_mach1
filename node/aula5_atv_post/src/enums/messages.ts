enum messages {
  salutation = "Hello guys",
  registeredClient = "Cliente cadastrado com sucesso",
  unregisteredClient = "Não há clientes cadastrados",
  registrationError = "Cliente não cadastrado",
  bodyExample = `bodyExpected: {name: string; age: number; email: string; profile: { type: string;credit: number; business: boolean;}}`,
  clientUpdated = "Cliente atualizado com sucesso",
  clientUpdatedError = "Cliente não atualizado",
}

export default messages;
