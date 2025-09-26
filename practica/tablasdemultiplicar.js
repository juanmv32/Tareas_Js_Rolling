// --------------------------------------------------
// el usuario debe ingresar el tipo de tabla que quiere obtener y la cantidad de resultados o repeticiones a realizar
// variables:
// tabla, repeticiones,
// proceso:
// un primer prompt pide el tipo de tabla a realizar
// un segundo prompt pregunta hasta que numero quiere hacerla

let tabla = Number(prompt("ingrese la tabla a calcular"));

// valdacion de tabla
while (Number.isNaN(tabla) || !Number.isInteger(tabla) || tabla <= 0) {
  tabla = Number(
    prompt(
      "Porfavor ingrese un valor valido para poder realizar la tabla correspondiente 😁"
    )
  );
}

let repeticion = Number(
  prompt(
    "ingrese hasta que numero quiere la tabla, (valores por arriba de 5 cifras, estan bajo su responsabilidad)"
  )
);
let inicio = 1;

// valdacion repeticion
while (
  Number.isNaN(repeticion) ||
  !Number.isInteger(repeticion) ||
  repeticion <= 0
) {
  alert(
    "Porfavor ingrese un valor valido para poder realizar la tabla correspondiente 😁"
  );
  repeticion = Number(
    prompt(
      "ingrese hasta que numero quiere la tabla, (valores por arriba de 5 cifras, estan bajo su responsabilidad)"
    )
  );
}
while (repeticion > 0) {
  console.log(`${tabla} X ${inicio} = ${tabla * inicio}`);
  repeticion--;
  inicio++;
}
