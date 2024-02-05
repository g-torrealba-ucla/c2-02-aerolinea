import { MVuelo } from "./Cl_mVuelo.js";

export class VVuelo {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("vueloForm");
    this.vista.hidden = true;
    this.lblNumero = document.getElementById("vueloFormLblNumero");
    this.lblTipo = document.getElementById("vueloFormLblTipo");
    this.lblCosto = document.getElementById("vueloFormLblCosto");
    this.lblPasajeros = document.getElementById("vueloFormLblPasajeros");
    this.btAceptar = document.getElementById("vueloFormBtAceptar");
    this.btAceptar.onclick = () => this.agregarVuelo();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarVuelo() {
    let vuelo = new MVuelo({
      numero: this.lblNumero.value,
      tipo: this.lblTipo.value,
      costo: this.lblCosto.value,
      pasajeros: this.lblPasajeros.value,
    });
    this.app.mAerolinea.procesarVuelo(vuelo);
    this.app.vAerolinea.reportarVuelo(vuelo);
    this.ocultar();
    this.app.vAerolinea.mostrar();
  }
}
