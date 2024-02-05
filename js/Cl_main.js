import { VAerolinea } from "./Cl_vAerolinea.js";
import { VVuelo } from "./Cl_vVuelo.js";
import { MAerolinea } from "./Cl_mAerolinea.js";
export class Cl_main {
  constructor() {
    this.app = {};
    this.app.mAerolinea = new MAerolinea();
    this.app.vVuelo = new VVuelo(this.app);
    this.app.vAerolinea = new VAerolinea(this.app);
  }
}
