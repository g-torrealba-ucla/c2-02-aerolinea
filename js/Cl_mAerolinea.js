export class MAerolinea {
  constructor() {
    this.acTotalingresos = 0;
    this.menor = 1000000;
    this.cntInternacional = 0;
    this.cntVuelos = 0;
  }
  procesarVuelo(vuelo) {
    this.acTotalingresos += vuelo.ingreso();
    if (vuelo.pasajeros < this.menor) this.menor = vuelo.pasajeros;
    if (vuelo.tipo === 2) this.cntInternacional++;
    this.cntVuelos++;
  }
  ingresoTotal() {
    return this.acTotalingresos;
  }
  menorCantPasajeros() {
    return this.menor;
  }
  porcInternacionales() {
    return (this.cntInternacional / this.cntVuelos) * 100;
  }
}
