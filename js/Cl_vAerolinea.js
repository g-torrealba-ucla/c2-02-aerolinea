export class VAerolinea {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainFormTabla");
    this.btAgregar = document.getElementById("mainFormBtAgregar");
    this.lblIngresoTotal = document.getElementById("mainFormLblIngresoTotal");
    this.lblMenorNumPasajeros = document.getElementById(
      "mainFormLblMenorNumPasajeros",
    );
    this.lblPorcInternacionales = document.getElementById(
      "mainFormLblPorcInternacionales",
    );
    this.btAgregar.onclick = () => {
      this.ocultar();
      this.app.vVuelo.mostrar();
    };
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarVuelo(vuelo) {
    this.tabla.innerHTML += `
    <tr>
      <td>${vuelo.numero}</td>
      <td>${vuelo.tipo}</td>
      <td>${vuelo.costo}</td>
      <td>${vuelo.pasajeros}</td>
      <td>${vuelo.ingreso()}</td>
    </tr>`;
    this.lblIngresoTotal.innerHTML = this.app.mAerolinea.ingresoTotal();
    this.lblMenorNumPasajeros.innerHTML =
      this.app.mAerolinea.menorCantPasajeros();
    this.lblPorcInternacionales.innerHTML =
      this.app.mAerolinea.porcInternacionales();
  }
}
