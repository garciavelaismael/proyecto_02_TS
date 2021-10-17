import { Producto } from "./Producto";
export class Dulce extends Producto {
  private _impuestoD: number;
  constructor(
    nombre: string,
    unidades: number,
    precio: number,
    impuestoD: number
  ) {
    super(nombre, unidades, precio);
    this._impuestoD = impuestoD;
  }

  precioT(): number | any {
    let precio: number;
    precio = super.precio;
    let impuestoD = 11 / 100;
    let precioT: number;
    if (this.precio > 0) {
      precioT = precio * impuestoD;
    }
    this.todo();
    {
      let resultado: string;
      resultado = `${super.todo()}, Porcentaje de impuestos: 
    ${this._impuestoD}, Precio Total: ${this._precio} `;
      return resultado;
    }
  }
}
