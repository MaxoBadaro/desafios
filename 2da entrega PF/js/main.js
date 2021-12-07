//------Este archivo contiene la aplicación de las funciones y el carrito------//

//----------------------------------------------------------------------------------//
/*La función realiza la creación del menú dinámico:*/

let insertar = document.getElementById('contenedor');
productos.forEach((prod)=>{
    const contenedor = document.createElement("div")
    contenedor.className ="card"
    contenedor.style = "width: 18rem"
    contenedor.innerHTML = `
                <img src="${prod.img}" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">Stock: ${prod.stock}</p>
                    <p class="card-text">Precio:$ ${prod.price}</p>
                    <button onclick="agregarAlCarrito(${prod.id})" class="btn btn-primary moverI">Agregar al carrito</button>
                </div>
    `
    insertar.appendChild(contenedor);
})
//en el array de carrito guardaremos todos los porductos que el cliente desee comprar
let carrito = []

//Esta es la función principal, me ingresa los prductos al arreglo y llamo a las demas funciones//
function agregarAlCarrito(prodId){

    let producto = productos.find((prod)=> prod.id === prodId);//prod.id del producto sea igual al prodId ingregsado por parámetro
    carrito.push(producto);//se agrega el poducto al arreglo carrito
    
    
    calcularTotal();
    mostrarCompra();
    localStorage.setItem("carrito", JSON.stringify(carrito));//stringfy(para pasar a formato JSON), paso el arreglo completo
}

let cantidadComprada = document.getElementById('cantidad')
let totalAPagar = document.getElementById('total');
//console.log(totalAPagar);

//Esta funcion calcula el total a pagar a medida que se agregan o quitan elementos del carrito (cuando se lo llama recorre el arreglo por completo y parse total unitario)//
function calcularTotal(){
    let total = 0;
    for(const producto of carrito){
        total += producto.price;
        //console.log(total);
    }
    totalAPagar.innerText = total;//modifica el texto de mi elemtno html que tiene totalAPagar
    cantidadComprada.innerText = carrito.length;//mismo para cantidadComprada
}

let tabla = document.getElementById('table')
let tableBody = document.getElementById('tabla-contenedor')

//Esta función me setea la vista del carrito de compras a medida que el usuario los agrega//
const mostrarCompra = () => {
    tableBody.innerHTML = ""//vacio el elemento para no agregar mas contnido cada vez que llamo a la función
    carrito.forEach((producto)=> {
        const tr = document.createElement('tr')
        tr.className = "table-primary"
        tr.innerHTML = `
                    <th scope="row">${producto.id}</th>
                    <td>${producto.name}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.price}</td>
                    `
        tableBody.appendChild(tr)//agrego como hijo a esa fila creada
    })
}

let botonVaciar = document.getElementById('vaciar');
botonVaciar.setAttribute("id", "vaciar");
botonVaciar.addEventListener("click", vaciarCarrito)//ingreso un evento que dispara la fucnion "VaciarCarrito"

//Esta funcion va a vaciar el carrito de compras si el usuario hace click en "vaciar//
function vaciarCarrito(){
    carrito = [];
    cantidadComprada.innerText = 0;
    totalAPagar.innerText = 0;
    localStorage.removeItem("carrito");
    tableBody.innerHTML = "";//borro todo los productos seleccionados que se ven en la pantalla
    //window.location.reload();//recargo la página porque sin eso
    //cuando quiero agregar nuevamente una vez vacié el carrito ya no me inserta productos en el carrito.
    //Hay alguna manera mejor?
}
