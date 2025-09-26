let edad;
let tieneLicencia = true;
let esMayorDeEdad;
let puedeConducir;

edad = parseInt(prompt("Edad:", ""));

if (edad >= 18) {
  esMayorDeEdad = true;
  if (tieneLicencia == true) {
    puedeConducir = true;
  } else {
    puedeConducir = false;
  }
} else {
  esMayorDeEdad = false;
}

if (esMayorDeEdad == true) {
  if (puedeConducir == true) {
    console.log("El Usuario es mayor de edad y puede conducir.");
  } else console.log("El Usuario es mayor de edad.");
} else {
  console.log("El Usuario no es mayor de edad.");
}
