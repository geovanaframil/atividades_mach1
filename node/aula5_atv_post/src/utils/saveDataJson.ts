import fs from "fs";
import { IDataCliente } from "../interfaces/client";

const dataPath = "./client.json";

function saveDataJson(data: IDataCliente[]) {
  const dataString = JSON.stringify(data);
  return fs.writeFileSync(dataPath, dataString);
}

export default saveDataJson;
