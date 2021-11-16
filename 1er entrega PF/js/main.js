alert("Bienvenida a la mejor dulceria online");
do{
    orden = prompt("Desea ordenar los alfajores por precio? s/n");
    ordenar();
    let opcion = verMenu();
    if(opcion === (productos.length + 1)){
        break;
    }

    let cant = parseInt(prompt(seleccionCant));
    agregarCarrito(opcion, cant);

    respuesta = prompt("Desea ontinuar comprando? s / n");

}while(respuesta === "s");

if(carrito.length > 0) verTotal();

alert("Gracias por su compra");