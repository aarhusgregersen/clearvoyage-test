import fs from "fs";
import { IVessel } from "../interfaces/vessel.interface.js";
import { IPort } from "../interfaces/port.interface.js";
import fetch, { Headers } from "node-fetch";
import { env } from "process";

// const DATA_PATH = "https://developer.searoutes.com/reference/getsearoute";
// const BASE_PATH = "https://api.searoutes.com/route/v2/sea/";
const BASE_PATH = "https://api.searoutes.com/geocoding/v2/port/hamburg";
const API_KEY = env.CLEARVOYAGE_API_KEY as string;

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key:": "API_KEY",
});
class SeaRoutesService {
  constructor() {}

  public async find() {
    try {
      const res = await fetch(BASE_PATH, { headers: headers });

      if (res.ok) {
        const data = await res.json();
        console.log("Res good");
        console.log(data);

        return data;
      } else {
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
