class autos{
    constructor(marca, modelo, precio, stock, largo){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.largo = largo;
    }
// si el largo >= 3 es una camioneta de lo contrario es un auto 
    precioFinal(){
        let iva = this.precio * 0.21;
        return this.precio + iva;
    }

    actualizacion(){
        this.stock = pickUpNissan.stock - 1;
    }

    getStock(){
        return this.stock()
    }

}

let pickUpNissan = new autos("Nissan", "Kicks", 23750, 8, 5);


console.log("Stock del vehiculo antes de la venta = " + pickUpNissan.stock);

console.log("El precio final es de " + pickUpNissan.precioFinal());

if (pickUpNissan.getStock != 0){
    console.log ("Gracias por su compra, recuerde traerlo a los 1000km para su primera revision tecnica ");
    pickUpNissan.actualizacion();
    console.log("Stock del vehiculo despues de la venta = " + pickUpNissan.stock);
}
//se recomienda llamar con getStock pero agrego las dos posibilidades para tenerlas en cuanta
if(pickUpNissan.largo >= 3){
    alert("Esta por comprar una camioneta")
}
else {
    alert("Esta por comprar un auto")
}