import axios from "axios";
import { env } from "process";
import { IPort } from "../interfaces/port.interface.js";
import { IVessel } from "../interfaces/vessel.interface.js";

const BASE_PATH = "https://api.searoutes.com/route/v2/sea";
const API_KEY = env.CLEARVOYAGE_API_KEY as string;

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};
class SeaRoutesService {
  constructor() {}

  public async find(vessel: IVessel, port: IPort) {
    const vesselCoordinates = `${vessel?.longitude},${vessel?.latitude}`;
    const portCoordinates = `${port?.longitude},${port?.latitude}`;
    const coordinates = `${vesselCoordinates};${portCoordinates}`;

    console.log(coordinates);

    try {
      const res = await axios(`${BASE_PATH}/${coordinates}`, {
        headers: headers,
      });

      if (res.status === 200) {
        const data = await res.data;

        return data;
      } else {
        // Could optimize here with granular error handling in case want to throw specific error codes
        console.log(res);
      }
    } catch (err) {
      console.log("Something went wrong:");
      console.log(err);
      return err;
    }
  }
}

export const seaRoutesService = new SeaRoutesService();
