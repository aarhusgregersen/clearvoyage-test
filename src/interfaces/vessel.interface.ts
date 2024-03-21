import { IPort } from "./port.interface.js";

export interface IVessel extends IPort {}

export interface IRawVesselsAndPortsDTO {
  vessels: IVessel[];
  ports: IPort[];
}
