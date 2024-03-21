import fs from "fs";
import { IRawVesselsAndPortsDTO } from "../interfaces/vessel.interface.js";

const DATA_PATH = "database.json";

class VesselsService {
  constructor() {}

  public async list() {
    const dataFile = fs.readFileSync(DATA_PATH, "utf-8");
    const data = JSON.parse(dataFile) as IRawVesselsAndPortsDTO;

    return data.vessels;
  }
}

export const vesselsService = new VesselsService();
