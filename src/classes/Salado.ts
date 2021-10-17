import { Producto } from "./Producto";
export class Salado extends Producto {
  private _impuestoS: number;
  constructor(
    nombre: string,
    unidades: number,
    precio: number,
    impuestoS: number
  ) {
    super(nombre, unidades, precio);
    this._impuestoS = impuestoS;
  }
  get impuestoS() {
    return this._impuestoS;
  }

  precioT(): number | any {
    let precio: number;
    precio = super.precio;
    let impuestoS = precio * this.unidades;
    let precioT: number;
    if (this.precio > 0) {
      precioT = precio * impuestoS;
      return precioT;
    }

    this.todo();
    {
      let resultado: string;
      resultado = `${super.todo()}, Porcentaje de impuestos: 
    ${this._impuestoS}, Precio Total: ${multiplicar(precio, impuestoS)} `;
      return resultado;
    }
  }
}

const multiplicar = (n1: number, n2: number): number => n1 * n2;
