let acumulador = 0;
let respuesta = "hola";
do{
    for (let i = 1; i <= 3; i++){
        let nota = parseInt(prompt("Ingresa la nota de un trimestre"));
        acumulador = acumulador + nota;
    }
    acumulador = acumulador / 3;
    if (acumulador >= 6){
        alert ("Aprobaste la materia");
    }
    else{
        alert ("Desaprobaste la materia ");
    }
    respuesta = prompt("Para seguir calculando prmedios de materias escriba 'seguir' caso contrario otra cosa.");
}
while(respuesta == "seguir");
