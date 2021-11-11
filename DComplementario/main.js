//1er funcion: carga dos variables
let numero1 = 0
let numero2 = 0
function pedirValores (){
    numero1 = parseInt(prompt("Ingrese el primer valor"));
    numero2 = parseInt(prompt("Ingrese el segundo valor"));
}
//2da función: suma los dos 
const suma = function (c, v){return c + v};
//3era función: da el resultado si la suma de los dos es multiplo de 3
function multiplo(result){
    if(( result % 3 ) == 0){

        alert(result + ' es multiplo de 3');
        
    }else{
    
        alert(result + ' no es multiplo de 3');
    
    }
}
pedirValores();
let x = suma(numero1, numero2);
multiplo(x);