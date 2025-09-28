// se que es codigo de mas pero me hizo ilusion dalre un poco de contexto 😁

const pilotosF1 = [
  "Max Verstappen",
  "Sergio Pérez",
  "Lewis Hamilton",
  "George Russell",
  "Charles Leclerc",
  "Carlos Sainz",
  "Lando Norris",
  "Oscar Piastri",
  "Fernando Alonso",
  "Esteban Ocon",
];

let pilotosAlfabetico = pilotosF1.slice(0).sort();

console.log(
  `Hasta el momento estos son los pilotos que tendremos en la carrera de hoy!!!`
);
for (let i = 0; i < pilotosAlfabetico.length; i++) {
  console.log(pilotosAlfabetico[i]);
}
console.log(" ");

console.log(`A continuación veremos la parrila de salida.`);

for (let i = 0; i < pilotosF1.length; i++) {
  console.log(i + 1 + `° ` + pilotosF1[i]);
}
console.log(
  `En el 3° puesto tenemos a ${pilotosF1[2]} y en el 5° puesto a ${pilotosF1[4]}`
);
console.log(" ");

console.log(
  `¡Atención, a último momento se agregaron 3 pilotos más a la parrilla de salida!`
);
pilotosF1.push("Pierre Gasly", "Valtteri Bottas", "Lance Stroll");

console.log(`Esta es la parrila de salida actualizada:`);
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(i + 1 + `° ` + pilotosF1[i]);
}
console.log(" ");

console.log(
  "Arrancando la carrera en la primera curva Lewis Hamilton sobrepaso al equipo RedBullRacing, y devido a un inicio accidentado por parte de Russell decendio al 6° puesto"
);

pilotosF1.splice(2, 2);
pilotosF1.unshift(`Lewis Hamilton`);
pilotosF1.splice(5, 0, `George Russell`);
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(i + 1 + `° ` + pilotosF1[i]);
}

console.log(" ");

console.log(
  "¡Bandera amarilla!, al parecer el monoplaza de Carlos Sainz tubo un desperfecto con el motor y tendra que abandonar la carrera."
);
let pilotosNF = ["Carlos Sainz"];
pilotosF1.splice(4, 1);
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(i + 1 + `° ` + pilotosF1[i]);
}
for (let j = 0; j < pilotosNF.length; j++) {
  console.log("OUT " + pilotosNF[j]);
}

console.log(" ");

console.log(
  "Wow, El Asturiano hizo una maniobra arriesgada en la curva 3 y saco de pista a Max Versteppen"
);
console.log(
  "Algo similar le sucedio en SilverStone en la termporada del 2021 junto a Hamilton, esperemos que se encuentre bien"
);
pilotosNF.splice(1, 0, `Max Verstappen`);
pilotosF1.splice(1, 1, `Fernando Alonso`);
pilotosF1.splice(7, 1);
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(i + 1 + `° ` + pilotosF1[i]);
}
for (let j = 0; j < pilotosNF.length; j++) {
  console.log("OUT " + pilotosNF[j]);
}
console.log(" ");

console.log(
  "Al Parecer Pérez tubo problemas en boxes y decendio al último lugar, hoy no es un buen día para el equipo de RedBull"
);
pilotosF1.splice(2, 1);
pilotosF1.push(`Sergio Pérez`);
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(i + 1 + `° ` + pilotosF1[i]);
}
for (let j = 0; j < pilotosNF.length; j++) {
  console.log("OUT " + pilotosNF[j]);
}

let podioF1 = pilotosF1.slice(0, 3);

console.log(" ");

console.log("Carrera Finalizada!!!, en el podio de hoy tenemos a");

for (let i = 0; i < podioF1.length; i++) {
  console.log(i + 1 + `° lugar ` + podioF1[i]);
}
