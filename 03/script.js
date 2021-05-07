let x = "Alondra";
let y = 19;
console.log(`Hola ${x}`);
console.log(`Edad ${y} años`);

console.log("BREAK"); // Detiene
for (i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

console.log("CONTINUE"); // Salta a la siguiente iteracion
for (i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

const array = [1, 2, 3, 4, 5];
// array.push(66);
// console.log(array);
let z = array;
z.push(8);
// Ambas se modifican ya que es por referencia.
console.log(array);
console.log(z);

console.log(array == z);
console.log(array === z);

console.log("FOR (array.lengt)");
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

console.log("FOR EACH");
array.forEach(function(valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
});

console.log("ITERAR AL REVES");
console.log("Reverse();")
console.log(array.reverse());
// console.log("ITERAR AL REVES");
// console.log("FOR --")
// for (let index = array.length - 1; index < 0; index--) {
//     console.log(array[index]);
// }

console.log("MATRICES");
matriz = [
    [1, 2],
    [3, 4]
];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
console.log(matriz);

console.log("RETO DOS");
let arrayReto = [7, 5, 3, 4];
const raizCuadradaMatriz = Math.sqrt(arrayReto.length);
console.log(raizCuadradaMatriz);

const matrizE = [
    [arrayReto[0], arrayReto[1]],
    [arrayReto[2], arrayReto[3]]
]
console.log(matrizE)

diagonalE1 = matrizE[0][0] + matrizE[1][1];
diagonalE2 = matrizE[0][1] + matrizE[1][0];


// ARRAYS DE PRUEBA
console.log(" ARRAYS DE PRUEBA ");
let arrayReto1 = [1, 5, 6, 7, 8];
const raizCuadradaMatriz1 = Math.sqrt(arrayReto1.length);
console.log(raizCuadradaMatriz1);


let arrayReto2 = [4, 8, 13, 7, 0, 5, 2, 8, 10];
const raizCuadradaMatriz2 = Math.sqrt(arrayReto2.length);
console.log(raizCuadradaMatriz2);

const matriz2 = [
    [arrayReto2[0], arrayReto2[1]],
    [arrayReto2[2], arrayReto2[3]]
]
console.log(matriz2)

diagonal1 = matriz2[0][0] + matriz2[1][1];
diagonal2 = matriz2[0][1] + matriz2[1][0];

diferenciaM2 = diagonal1 - diagonal2;
if (diferenciaM2 < 0) {
    diferenciaM2 = Math.abs(diferenciaM2);
}
console.log(diferenciaM2);

let arrayReto3 = [-6, 7, 0, -5];
const raizCuadradaMatriz3 = Math.sqrt(arrayReto3.length);
console.log(raizCuadradaMatriz3);

const matriz3 = [
    [arrayReto3[0], arrayReto3[1]],
    [arrayReto3[2], arrayReto3[3]]
]
console.log(matriz3)

diagonal3 = matriz3[0][0] + matriz3[1][1];
diagonal4 = matriz3[0][1] + matriz3[1][0];

diferenciaM3 = diagonal3 - diagonal4;
if (diferenciaM3 < 0) {
    diferenciaM3 = Math.abs(diferenciaM3);
}
console.log(diferenciaM3);

let arrayReto4 = [19, 5, 7, 2, 27, 10, 0, 0, 1, 5];
const raizCuadradaMatriz4 = Math.sqrt(arrayReto4.length);
console.log(raizCuadradaMatriz4);