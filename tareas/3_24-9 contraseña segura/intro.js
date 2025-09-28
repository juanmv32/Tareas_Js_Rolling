// ALGORITMO
// ---------
// entrada:pedir al usuario la contraseña
// proceso: verificar si la contraseña tiene almenos una mayuscula y un numero
// salida: se informa si la contraseña si es valida, o de lo contrario se informa porque no lo es

let contraseña = prompt("ingrese una contraseña");
let Mayus = `AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ`;
let numeros = "0123456789";
let tieneMayus = false;
let tieneNum = false;
while (contraseña.length < 6) {
  alert(`tu contraseña es demaciado corta😓`);
  contraseña = prompt(`porfavor ingrese una contraseña mas larga 😁:`);
}
for (let i = 0; i < contraseña.length; i++) {
  for (let j = 0; j < Mayus.length; j++) {
    if (contraseña[i] === Mayus[j]) {
      tieneMayus = true;
    }
  }
}
for (let k = 0; k < contraseña.length; k++) {
  for (let m = 0; m < numeros.length; m++) {
    if (contraseña[k] === numeros[m]) {
      tieneNum = true;
    }
  }
}

if (tieneMayus != true && tieneNum != true) {
  console.log(
    "Contraseña inválida ❌. Tiene que tener almenos 1 mayuscula y un número"
  );
} else if (tieneMayus != true) {
  console.log("Contraseña inválida ❌. Tiene que tener almenos 1 mayuscula");
} else if (tieneNum != true) {
  console.log("Contraseña inválida ❌. Tiene que tener almenos 1 número");
} else {
  console.log(`Contraseña válida ✅`);
}
