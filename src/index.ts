import { menuPral } from "./utils/menuPral";
import { leer } from "./utils/leerTeclado";
import { Producto } from "./classes/Producto";
import { Dulce } from "./classes/Dulce";
import { Salado } from "./classes/Salado";

let prod: Producto;
let dul: Dulce;
let sal: Salado;

let productos: Array<Producto> = new Array<Producto>();

const nuevoProd = async () => {
  let prod: Producto;
  const nombre = await leer("\nNombre");
  const unidades = parseInt(await leer("Unidades"));
  const precio = parseFloat(await leer("Precio"));
  prod = new Producto(nombre, unidades, precio);
  productos.push(prod);
  return prod;
};

const nuevoSal = async () => {
  let sal: Salado;
  const nombre = await leer("\nNombre");
  const unidades = parseInt(await leer("Unidades"));
  const precio = parseFloat(await leer("Precio"));
  const impuestoS = parseInt(await leer("% de impuesto"));
  sal = new Salado(nombre, unidades, precio, impuestoS);
  productos.push(sal);
  return sal;
};

const nuevoDul = async () => {
  let dul: Dulce;
  const nombre = await leer("\nNombre");
  const unidades = parseInt(await leer("Unidades"));
  const precio = parseFloat(await leer("Precio"));
  const impuestoD = parseInt(await leer("% de impuesto"));
  dul = new Dulce(nombre, unidades, precio, impuestoD);
  productos.push(dul);
  return dul;
};

const mostrar = async () => {
  for (let a of productos) {
    console.log(`${a.todo()}`);
  }
};

const borrar = async () => {
  let i: number;
  let registro: number = parseInt(
    await leer("\nNombre del producto a eliminar")
  );
  for (i = 0; i < productos.length; i++) {
    if (i == registro) {
      productos.splice(i, 1);
    }
  }
  console.log("Eliminado");
};

const salario = async () => {
  for (let a of productos) {
    console.log(a instanceof Salado, Dulce);
    console.log(`${a.todo()}, Precio base: ${a.precio}`);
  }
};

const buscador = async () => {
  let objIndex: number;
  let Nombre: string = await leer(
    "\nIntroduce el nombre del producto a buscar: "
  );
  if (productos != undefined) {
    objIndex = productos.findIndex((obj) => obj.nombre == Nombre);
    console.log(productos[objIndex]);
  }
};

const actualizar = async (prod: Producto | undefined) => {
  if (prod != undefined) {
    let NOMBRE: string = await leer("\nProducto a modificar: ");
    let newUnit: number = parseInt(await leer("\nNuevo nº de unidades"));

    productos.map(function (dato) {
      if (dato.nombre == NOMBRE) {
        dato.unidades = newUnit;
      }
      return dato;
    });
    console.log(productos);
  } else {
    console.log(`\Producto no creado`);
    try {
      console.log(productos);
    } catch (err) {
      console.log(`NO CREADO--- ${err}`);
    }
  }
};

const main = async () => {
  let n: number;
  let prod: Producto | undefined;
  do {
    n = await menuPral();
    switch (n) {
      case 1:
        prod = await nuevoProd();
        break;
      case 2:
        sal = await nuevoSal();
        break;
      case 3:
        dul = await nuevoDul();
        break;
      case 4:
        mostrar();
        break;
      case 5:
        salario();
        break;
      case 6:
        await borrar();
        break;
      case 7:
        await actualizar(prod);
        break;
      case 8:
        await buscador();
        break;
      case 0:
        console.log("\nAdios");
    }
  } while (n != 0);
};
main();
