// Crea un programa que pida la nota de un estudiante en los tres trimestres del curso
// y calcule la nota promedio. Tener en cuenta que, solo se pueden ingresar números
// del 1 al 10 . El resultado que dará será el siguiente:
// - 'Nota Insuficiente' si la el promedio está entre 1 y 3,
// - 'Nota Regular' si está entre 4 y 5,
// - 'Nota Buena' si está entre 6 y 7,
// - 'Nota Muy Buena' si está entre 8 y 9 y
// - 'Nota Sobresaliente' si es igual a 10.

let nota1=parseInt(prompt("Ingrese la nota del primer cuatrimestre:"));
let nota2=parseInt(prompt("Ingrese la nota del segundo cuatrimestre:"));
let nota3=parseInt(prompt("Ingrese la nota del tercer cuatrimestre:"));


if (Number.isNaN(nota1) || nota1 < 1 || nota1 > 10 ||
    Number.isNaN(nota2) || nota2 < 1 || nota2 > 10 ||
    Number.isNaN(nota3) || nota3 < 1 || nota3 > 10) {
alert("Los números ingresados deben estar entre el 1 y el 10");
}  
promedio =  (nota1 + nota2 + nota3) / 3;

switch (true) {
    case promedio >1 && promedio < 3:
      calificacion = "Nota Insuficiente";
      break;
    case promedio >= 4 && promedio <= 5:
      calificacion = "Nota Regular";
      break;
    case promedio >= 6 && promedio <= 7:
      calificacion = "Nota Buena";
      break;
    case promedio >= 8 && promedio <= 9:
      promedio =  (nota1 + nota2 + nota3) / 3;
      calificacion = "Nota Muy Buena";
      break;
    case promedio == 10:
      promedio =  (nota1 + nota2 + nota3) / 3;
      calificacion = "Nota sobresaliente";
      break;
    default:
      calificacion = "";
  };

  console.log("El promedio es: " + promedio);
  console.log("Su calificación es: " + calificacion);