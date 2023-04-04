enum messages {
  salutation = "Hello guys",
  registeredClient = "Cliente cadastrado com sucesso",
  unregisteredClient = "Não há clientes cadastrados",
  registrationError = "Cliente não cadastrado",
  bodyExample = `bodyExpected: {
  id: string;
  name: string;
  age: number;
  email: string;
  profile: {
    type: string;
    credit: number;
    business: boolean;
    }
  }`,
}

export default messages;
