//Escriba un programa que pida al usuario un número del 1 al 7 y luego
//muestre el día de la semana correspondiente (1 para "Lunes", 2 para
//"Martes", etc.).
let diaSemana=parseInt(prompt("Ingrese un número del 1 al 7"));

switch(diaSemana){
    case 1:
        console.log("Es lunes");
        break;
    case 2: 
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miercoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sábado");
        break;
    case 7:
        console.log("Es domingo");
        break;
    default:
        console.log("El número ingresado no corresponde a un día de la semana");
}