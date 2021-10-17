import { leer } from "./leerTeclado";

export const menuPral = async () => {
  let n: number;
  console.log("\n");
  console.log("1.- nuevo Producto");
  console.log("2.- nuevo Salado");
  console.log("3.- nuevo Dulce");
  console.log("4.- mostrar lista de productos");
  console.log("5.- precios");
  console.log("6.- borrar producto");
  console.log("7.- actualizar unidades de productos");
  console.log("8.- buscador");
  n = parseInt(await leer("opción"));
  return n;
};
