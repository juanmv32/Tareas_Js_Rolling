let nombre, apellido, calculo, apodo;
const min = 0;
const max = 100;
nombre = prompt("Ingrese su nombre para generar su usuario: ");
apellido = prompt("Ingrese su apellido para generar su usuario: ");
calculo = Math.floor(Math.random() * (max - min + 1));
/* usar join para juntar los nombres */
/* .floor redondea a +1 (es decir 2.3 = 3) */
apodo = [nombre, apellido, calculo].join("");
alert(apodo);
