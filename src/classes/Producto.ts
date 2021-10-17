export class Producto {
  private _nombre: string;
  protected _unidades: number;
  protected _precio: number;
  constructor(nombre: string, unidades: number, precio: number) {
    (this._nombre = nombre),
      (this._unidades = unidades),
      (this._precio = precio);
  }
  get nombre() {
    return this._nombre;
  }
  get unidades() {
    return this._unidades;
  }
  set unidades(newUnit: number) {
    this._unidades = newUnit;
  }

  get precio() {
    return this._precio;
  }

  todo() {
    return `Nombre: ${this._nombre} 
    Unidades: ${this._unidades} 
    Precio base: ${this.precio}
    Precio sin impuesto: ${multiplicar(this.precio, this.unidades)}`;
  }
}

const multiplicar = (n1: number, n2: number): number => n1 * n2;
