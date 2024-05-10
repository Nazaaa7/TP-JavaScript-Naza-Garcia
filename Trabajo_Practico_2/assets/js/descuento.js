// Una tienda aplica un descuento del 15% para las compras que incluyan 10
// artículos o más iguales cuyo precio total sea superior a 20000 pesos. Tu programa
// debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y
// el precio. Tener en cuenta que, solo se pueden ingresar números mayores a 1, y
// además, si la cantidad y el monto supera lo establecido, el descuento deberá
// aplicarse al precio total para luego mostrar en pantalla un mensaje que lo
// confirme. De lo contrario, indicar que no se superó la cantidad o el precio, según
// corresponda.


let nombreProducto = prompt("Ingrese el nombre del producto: ");
let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));
let cantProducto = parseInt(prompt("Ingrese la cantidad del producto: "));
total = precioProducto * cantProducto;

console.log("Producto: "+nombreProducto);
console.log("Precio: "+precioProducto);
console.log("Cantidad: "+ cantProducto);

if(cantProducto > 1 && total >= 20000){
    descuento = (total * 15) /100;
    console.log("Total: " + total);
    nuevoTotal = (total - descuento);
    console.log("Su total con el descuento es de: " + nuevoTotal)
} else if(cantProducto == 1){
    console.log("Debe comprar más de un producto");
}else if(total < 20000){
    console.log("Total: " + total);
} else{
    alert("Ingrese un número válido")
}
