// ALGORITMO
// ---------
// entrada:pedir al usuario que ingrese las ciudades
// proceso: una vez se ingrese la ciudad se compruba si el valor es null y se cancela, en caso contrario se vuelve a pedir un input. luego se agrega al final del array la ciudad de París y se reemplaza la segunda posicion por Barcelona
// salida: se informa que elementos estan el 1ra 3ra y ultima posicion, se informa la cantidad de ciudades que se agregaron, se indorma que barcelona pasara a estar en 2da posicion y se muestra el array completo

const ciudades = [
  "Nueva York, Estados Unidos",
  "Barcelona, España",
  "Tokio, Japón",
  "Londres, Reino Unido",
  "Roma, Italia",
  "Pekín, China",
  "Río de Janeiro, Brasil",
  "Ámsterdam, Países Bajos",
  "Sídney, Australia",
  "El Cairo, Egipto",
];
while (true) {
  const entrada = prompt(
    "ingrese la ciudad y el país separados por una ( , ) a ser listados. Para finalizar dale a cancelar."
  );
  if (entrada === null) break;
  const limpio = entrada.trim();
  if (limpio === "") continue;
  ciudades.push(limpio);
}
console.log(`se agregaron ` + ciudades.length + ` ciudades al arreglo`);
console.log(" ");
ciudades.push("París");

console.log(`Elemento en 1ra posición: ${ciudades[0]}`);
console.log(`Elemento en 3ra posición: ${ciudades[2]}`);
console.log(`Elemento en última posición: ${ciudades[ciudades.length - 1]}`);
console.log(" ");

console.log(
  `la ciudad de ${ciudades[2]} que esta en 2da posición sera reemplazada por Barcelona`
);
console.log(" ");

ciudades.splice(1, 0, "Barcelona");

for (let i = 0; i < ciudades.length; i++) {
  console.log(i + 1 + `° ` + ciudades[i]);
}
