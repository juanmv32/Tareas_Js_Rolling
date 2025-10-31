// se asegura de que el valor inicial del display sea 0
function clearDisplay() {
  document.getElementById("display").value = "0";
}
// en el caso de que el display tenga un 0 o un Error, se reemplaza con el numero ingresado
// caso contrario, se concatena el numero al final del valor actual del display
function addNumber(number) {
  const display = document.getElementById("display");
  if (display.value === "0" || display.value === "Error") {
    display.value = number;
  } else {
    display.value += number;
  }
}
// si en diplay el ultimo caracter es un operador, se reemplaza por el nuevo operador
// caso contrario, se concatena el operador al final del valor actual del display
function addOperator(simbolo) {
  const display = document.getElementById("display");
  const lastChar = display.value.slice(-1);
  if (["+", "-", "*", "/"].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + simbolo;
  } else {
    display.value += simbolo;
  }
}
// si dice error lo resetea a 0
// si la longitud del display es mayor a 1, elimina el ultimo caracter
// si no, resetea el display a 0
function backspace() {
  const display = document.getElementById("display");

  if (display.value === "Error") {
    display.value = "0";
    return;
  }
  // forma retraida de hacer un If else
  display.value = display.value.length > 1 ? display.value.slice(0, -1) : "0";
}
// toma el "ultimoCaracter" del display y verifica si es un operador
// si es asi, concatena "0." al display al darle al "."
// si hay un numero agrega el "."
function addDecimal() {
  const display = document.getElementById("display");
  const ultimoCaracter = display.value.at(-1);
  if (["+", "-", "*", "/"].includes(ultimoCaracter)) {
    display.value += "0.";
    return;
  }
  if (display.value.includes(".")) {
    return;
  }
  if (display.value === "0") {
    display.value = "0.";
    return;
  }
  // parts, secciona el display en partes usando los operadores como separadores "(/[\+\-\*\/]/)"
  // luego verifica si parts no contiene un punto decimal
  // para evitar 1.5.6
  const parts = display.value.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    display.value += ".";
  }
}
// eval evalua la expresion matematica en el display
// y toFixed(2) limita el resultado a 2 decimales
function result() {
  const display = document.getElementById("display");

  let result = eval(display.value);
  display.value = parseFloat(result.toFixed(2));
}
