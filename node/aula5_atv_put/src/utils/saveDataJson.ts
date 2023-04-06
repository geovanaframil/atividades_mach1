import fs from "fs";
import { IProduct } from "../interfaces/product";

const dataPath = "./client.json";

function saveDataJson(data: IProduct[]) {
  const dataString = JSON.stringify(data);
  return fs.writeFileSync(dataPath, dataString);
}

export default saveDataJson;