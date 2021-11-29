//crea la lista del usuario en el html 
function listaCompras(){
    
    let valor = document.getElementById("elemento");
    let lista = document.getElementById("lista");


    let nuevoLi = document.createElement("li");
    
    nuevoLi.innerHTML = `${valor.value}`;

    lista.appendChild( nuevoLi );
    lista = listaUsuario;

}
//borra el ultimo objeto de la lista del usuario
function borrarElemento(){
    
    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);

}
//array de los productos de gody
let productos = [
    
    {id: "1", name: "ALF BONOBON SIMPLE BLANCO", price:80, stock:90},
    {id: "2", name: "ALF BONOBON SIMPLE NEGRO", price:80, stock:136},
    {id: "3", name: "ALF CACAHAFAZ BLANCO", price:160, stock:30},
    {id: "4", name: "ALF CACHAFAZ NEGRO", price:190, stock:87},
    {id: "5", name: "ALF BONOBON TRIPLE BLANCO", price:110, stock:67},
    {id: "6", name: "ALF BONOBON TRIPLE NEGRO", price:110, stock:18},
    {id: "7", name: "ALF CACHAFAZ MOUSSE", price:160, stock:50},
    {id: "8", name: "ALF GUAYMALLEN TRIPLE", price:50, stock:107},
    {id: "9", name: "ALF TERRABUSI SIMPLE", price:80, stock:27},

];

//haciendo click en el boton se ve el array de forma ordenada
function verListaAlfajores(){
    for (const producto of productos){
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = 
        `<h3> ${producto.id} ${producto.name}</h3>
        <p>$ ${producto.price} </p>`;
    
        document.body.appendChild(contenedor);
    }
}

