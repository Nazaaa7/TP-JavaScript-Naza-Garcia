//Escribe un programa que pida al usuario tres números y luego los muestre
//en orden ascendente.

let numeroUno = parseInt(prompt("Ingrese un número"));
let numeroDos = parseInt(prompt("Ingrese un segundo número"));
let numeroTres = parseInt(prompt("Ingrese un tercer número"));

let temp;
if (numeroUno > numeroDos) {
    temp = numeroUno;
    numeroUno = numeroDos;
    numeroDos = temp;
}
if (numeroDos > numeroTres) {
    temp = numeroDos;
    numeroDos = numeroTres;
    numeroTres = temp;
}
if (numeroUno > numeroDos) {
    temp = numeroUno;
    numeroUno = numeroDos;
    numeroDos = temp;
}

// Mostrar los números ordenados
console.log("Números ordenados en forma ascendente:", numeroUno, numeroDos, numeroTres);