$(document).ready(function(){
    $("#leerEmpleado").click(function(e){
        e.preventDefault();
        $.get("empleados.json", function(data){
            console.log(data.nombre);
            $("#datosEmpleado").html(`
                Nombre:${data.nombre} <br>
                Puesto:${data.puesto} <br>
                Edad:${data.edad} <br>
            `);
        })
    });
    $("#leerArregloEmpleado").click(function(e){
        e.preventDefault();
        $("#listaEmpleados").html("");
        $.get("empleados.json", function(data){
            //console.log(data); 
            $.each(data, function(index, item){
                $("#listaEmpleados").html($("#listaEmpleados").html()+`
                <li>${item.nombre} -- ${item.puesto}</li>
                `);
            });
        });
    });
});

