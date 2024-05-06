//Escriba un programa que pida al usuario un número y luego muestre si es
//par o impar.

let numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 == 0) {
    console.log("El número que ingresó es par");
} else if(numero % 2 == 1){
    console.log("El número que ingresó es impar");
}else{
    console.log("El número que ingresó no es válido");
}