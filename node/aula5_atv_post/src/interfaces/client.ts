interface IProfileClient {
  type: string;
  credit: number;
  business: boolean;
}

interface IDataCliente {
  id: string;
  name: string;
  age: number;
  email: string;
  profile: IProfileClient;
}

export { IProfileClient, IDataCliente };
