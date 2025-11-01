import { superheroe, usuario } from "./datos.js"; //comentario personal "recordar poner.js en importar😓"

// Ejecicio 1 ✔
// Crear una clase Producto que contenga las siguientes propiedades:
// id
// nombre
// detalle
// marca
// precio
// stock
// Crear 5 instancias de Producto y agregarlas a un array llamado “productos” ✔
// Crea un método estático en la clase Producto que reciba un array de productos y devuelva la suma de los precios unitarios.
// Crea otro método estático en la clase Producto que reciba un array de productos y devuelva solo los productos que tengan stock

// productos-array
let productos = [];

// clase producto, contruye las propiedades y agrega al array productos cada instancia creada.
class Producto {
  constructor(id, nombre, detalle, marca, precio, stock) {
    this.id = id;
    this.name = nombre;
    this.detail = detalle;
    this.brand = marca;
    this.price = precio;
    this.stock = stock;

    productos.push(this);
  }

  // metodo sumar precios, toma el array de productos y devuelve la "reduccion" del array sumando los precios.
  static sumarPrecios(productosArray) {
    return productosArray.reduce(
      (total, producto) => total + producto.price,
      0
    );
  }
  //   metodo productoStock, filtra el array de productos y devuelve solo los que tienen stock mayor a la cantidad deseada.
  static stock(productosArray, cantidad) {
    return productosArray.filter((producto) => producto.stock > cantidad);
  }
}

const producto001 = new Producto(
  1,
  "Salsa de Tomate",
  "Pure de Tomate Natural",
  "Campañola",
  100,
  10
);
const producto002 = new Producto(
  2,
  "Fanta Naranja",
  "Bebida Gaseosa",
  "Coca-Cola",
  120,
  0
);
const producto003 = new Producto(
  3,
  "Agua Mineral",
  "Bebida sin gas",
  "Eco de los Andes",
  100,
  25
);
const producto004 = new Producto(
  4,
  "Pure de Papas Instantaneo",
  "Pure de Papas",
  "Knorr",
  250,
  8
);
const producto005 = new Producto(
  5,
  "Arroz Largo Fino",
  "Arroz",
  "Gallo",
  200,
  12
);

console.log("ingresar en consola los siguientes comandos:");
console.log(
  "Producto.stock(productos,NUMERO) para filtrar los productos con stock mayor a NUMERO"
);
console.log(
  "Producto.sumarPrecios(productos) para sumar los precios de los productos"
);

console.log("------------------------------");

// Ejercicio 2 ✔
// Dado el siguinete arrays:

let num1 = [23, 56, 3, 67];
let num2 = [100, 456, 2, 347];

// Usa el operador Spread para unir ambos arrays y obtener el número máximo.

let combinado = [...num1, ...num2];

let maximo = Math.max(...combinado);
console.log("El valor maximo entre los arreglos num1 y num2 es :", maximo);

// anotaciones
// el spread operator (...) + array crea un nuevo array con los elementos de los arrays originales
// Math.max() recibe una lista de numeros y devuelve el mayor
console.log("------------------------------");

// Ejercicio 3 ✔
// Tenemos estos dos objetos:

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

// Usando spread operator y desestructuración de objetos necesitamos crear un nuevo objeto que contenga la propiedad brand de myVehicle y todas las propiedades de updateMyVehicle

const newVehicle = {
  brand: myVehicle.brand,
  ...updateMyVehicle,
};
console.log("El nuevo objeto newVehicle es :", newVehicle);
console.log("------------------------------");

// ejercicio 4 ✔

// Dado el siguiente código:

let isActive = false;
// if (isActive) {
//   console.log("Activado");
// } else {
//   console.warn("No está activado");
// }

// Usar el operador ternario para simplificar el condicional.

isActive ? console.log("Activado") : console.log("No esta Activado");
console.log("------------------------------");

// ejecicio 5 ✔

// Dado el siguiente código(esta en datos.js):
// Realiza las modificaciones necesarias para que se puedan exportar ambos objetos ✔

// Dado el siguiente código, agrega las líneas necesarias para importar los dos objetos anteriores:

const { alias, nombre } = superheroe;

console.log(`Mi nombre es ${superheroe.nombre} y soy ${superheroe.alias}`);

const { username, email, company } = usuario;
console.log("");

console.log(`Usuario: ${usuario.username}`);
console.log(`Email: ${usuario.email}`);
console.log(`Compañia: ${usuario.company.name}`);
console.log("");
