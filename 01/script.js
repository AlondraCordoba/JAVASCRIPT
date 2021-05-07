console.log("Hola Mundo");
// window.alert("Hola Mundo");
// document.write("Hola Mundo");

let x = 2;
//let x = "HOLA";
let y = 1;
// y -= x;
y += x;
console.log(y);

// COMPARACION
// IGUALDAD 
if (x == y) {
    console.log("True, los valores (x y) son iguales");
} else {
    console.log("False, los valores (x y) no son iguales");
}

let a = true;
let b = false;
// AND &&
console.log("AND");
console.log(a && b);
console.log(b && a);

// OR ||
console.log("OR");
console.log(a || b);
console.log(b || a);

// NOR 
console.log("NOR");
console.log(!!a);
console.log(!!b);

// CONCATENACION
let edad = 19;
console.log("Mi edad es: " + edad + " años");

// TERNARIO
console.log("TERNARIO")
let j = 5;
let i = 9;

// CONDICION DE MAYOR >
console.log(i > 4 ? 'i es mayor 4' : 'i no es mayor que 4');

// AND / OR Doble condicion
console.log(j && i > 4 ? 'Ambos son mayores que 4' : 'Ambos valores no son mayores que 4');

// TERNARIO DOBLE
let valor1 = false;
let valor2 = true;

console.log((valor1 == true) ? 'Valor 1 es True' : (valor2 == true) ? 'Valor 2 es True' : 'El Valor es False');