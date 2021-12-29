//Sección AJAX 
const URLGET   = "https://jsonplaceholder.typicode.com/posts"
console.log($('#submit'));
$("#submit").click(function(e) {
    e.preventDefault();
    console.log(e);
    $("input").each((index,item) => console.log(item.value));
    let nombre = document.getElementById("inputNom").value;
    let telefono = document.getElementById("inputTel").value;
    const infoPost =  { nombre: `${nombre}`, telefono: `${telefono}` }
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            console.log(estado);
            console.log(respuesta);
            $("body").prepend(`
            <div>Guardado:${respuesta.nombre}</div>
            <div class="alert alert-warning" role="alert">
            Pedido generado con éxito ${respuesta.nombre}
            </div>`);
        }  
    });
});

