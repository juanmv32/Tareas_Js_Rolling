// ALGORITMO
// ---------
// entrada:
// proceso: se simula el lanzamiento de 2 dados 50 veces, se suma el resultado de ambos dados y se cuenta cuantas veces aparece cada resultado posible (de 2 a 12) utilizando un array donde el indice representa la suma y el valor en ese indice representa la cantidad de apariciones de esa suma
// salida: se muestra en consola la cantidad de apariciones de cada suma posible (de 2 a 12)

const N = 50;
const apariciones = Array(13).fill(0);
for (let i = 0; i < N; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1 + dado2;
  apariciones[suma]++;
}

for (let i = 2; i <= 12; i++) {
  console.log(`Suma ${i}: ${apariciones[i]} apariciones`);
}

// --- IGNORE ---
// aprendi que array peude funcionar como constructor y crear x cantidad de espacios vacios
// y que fill rellena esos espacios con el valor que le pases
// en este caso 0
