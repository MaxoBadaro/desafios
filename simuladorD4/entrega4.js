// Calcular pagos en cuotas sobre un monto determinado.
// cuotas: 1 = (/1) , 3 = (/3) , 6 = (/6) , 12 = (/12)
// interes: 1 = 0% , 3 = 5%... si puedo 
// calcula el precio por mes
let precio = parseInt(prompt("Ingrese el precio total"));
let cuota = prompt("¿En cuantas cuotas quiere realizar su compra?");


function precioDeCuota (precio , cuota){

    if(cuota == "1"){
        let totalpormes = precio / 1;
        return totalpormes;
    }
    else if (cuota == "3"){
        let totalpormes = precio / 3;
        return totalpormes;
    }
    else if (cuota == "6"){
        let totalpormes = precio / 6;
        return totalpormes;
    }
    else if (cuota == "9"){
        let totalpormes = precio / 9;
        return totalpormes;
    }
    else if (cuota == "12"){
        let totalpormes = precio / 12;
        return totalpormes;
    }

}

function calcularIntereses (cuota){
    if (cuota == "1"){
        let interesPorMes = 0;
        return interesPorMes;
        }
    else if (cuota == "3"){
        let interesPorMes = precio * 0.03;
        return interesPorMes;
        }        
    else if (cuota == "6"){
        let interesPorMes = precio * 0.06;
        return interesPorMes;
        }
    else if (cuota == "9"){
        let interesPorMes = precio * 0.09;
        return interesPorMes;
        }
    else if (cuota == "12"){
        let interesPorMes = precio * 0.12;
        return interesPorMes;
        }    
}

let precioFinal = precioDeCuota(precio, cuota) + calcularIntereses(cuota);
alert (`El precio final de cada cuota con intereses es de: ${precioFinal}`)