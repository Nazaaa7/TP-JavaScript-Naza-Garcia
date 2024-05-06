//Escribe un programa que pida al usuario tres números y luego los muestre
//en orden ascendente. 

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
let numero3 = parseInt(prompt("Ingresa el tercer número:"));
let numMenor, numMedio, numMayor;


if (numero1 <= numero2) {
    numMenor = numero1;
    numMayor = numero2;
} else {
    numMenor = numero2;
    numMayor = numero1;
}
if (numero3 <= numMenor) {
    numMedio = numMenor;
    numMenor = numero3;
} else if (numero3 >= numMayor) {
    numMedio = numMayor;
    numMayor = numero3;
} else {
    numMedio = numero3;
}

console.log(numMenor);
console.log(numMedio);
console.log(numMayor);



