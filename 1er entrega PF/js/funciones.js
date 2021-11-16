//------Este archivo contiene las funciones necesarias para la Dulceria Online------//

//----------------------------------------------------------------------------------
/*La función muestra por pantalla todos los elementos del array de productos como un menú:*/

const verMenu = () =>{
    let menu = "Elige un alfajor \n";
    productos.forEach((producto)=>{
        menu += producto.id + ".-" + producto.name +".  " + producto.price + "\n"
    });
    menu += (productos.length + 1) + ".-Salir";
    let op = parseInt(prompt(menu));
    return op;
};
//----------------------------------------------------------------------------------

/*Esta funcion determina si existe el stock suficiente para realizar la venta
Retorna:*/

const hayStock = (cantidad, stock) => {
    if(cantidad > stock) {
        alert(`No tenemos suficiente stock, el disponible es ${stock}`);
        return false;
    }
    return true;
}
//----------------------------------------------------------------------------------

/*Esta funcion se encarga de agregar al carrito un producto */
const agregarCarrito = (opcion, cant) => {
    10
    const encontrado = productos.find(producto => producto.id === opcion.toString());
    if(hayStock(cant, encontrado.stock)){
        let item = {
            cantidad:cant,
            price:encontrado.price * cant,
            name:encontrado.name,
        }
        carrito.push(item);
        productos[opcion - 1].stock -= cant;
        alert(`${encontrado.name} fueron agregados al carrito`)
    }
};
//----------------------------------------------------------------------------------

/*Esta funcion muestra el total a pagar y productos a llevar*/
const verTotal = () => {
    let mostrar ="";
    let total = 0 ;
    carrito.forEach(producto =>{
        mostrar += `Producto: ${producto.name} Cantidad: ${producto.cant} Precio: ${producto.price} \n`; //no define la cantidad
        total += producto.price
})
mostrar += `Total: ${total}`;
alert(mostrar);
}
//----------------------------------------------------------------------------------

/*Esta función ordena de forma creciente (de menor a mayor los precios de los productos)*/

const ordenar = () => {
    if(orden == "s"){
        productos.sort((a,b) =>{
            if (a.price > b.price){
                return 1;
            }
            if(a.price < b.price){
                return -1;
            }
            return 0;
        });
    }
}