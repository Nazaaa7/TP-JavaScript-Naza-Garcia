//Escribe un programa que pida al usuario su edad y luego le diga en qué
//rango de edad se encuentra: niño (0-12), adolescente (13-19), adulto
//(20-59), o adulto mayor (60 o más).

let edad = parseInt(prompt("Ingrese su edad: "));

if(edad >=0 && edad <= 12){
    console.log("Usted es un niño");
}else if(edad >=13 && edad <= 19){
    console.log("Usted es un adolecente");
}else if(edad >=20 && edad <= 59){
    console.log("Usted es un adulto");
}else if(edad >60 && edad <= 110){
    console.log("Usted es un adulto");
}