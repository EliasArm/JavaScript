console.log(' --- Return --- ');

// Return - Todo lo que se encuentra debajo del return ya no se va a ejecutar

const operacion = (tipo, num1, num2) => {
    let resultado;
    if(tipo === 'suma'){
        // console.log(num1 + num2);
        resultado = num1 + num2;
    }else if(tipo === 'resta'){
        // console.log(num1 - num2);
        resultado = num1 - num2;
    }
    return resultado;
}
const suma = operacion('suma',5,6)
const resta = operacion('resta',6,5);
console.log(suma);
console.log(resta);


const operacion2 = (tipo, num1, num2) => {
    if(tipo === 'suma'){
        return num1 + num2;
    } else if(tipo === 'resta'){
        return num1 - num2;
    }
}

const suma2 = operacion2('suma',3,2);
console.log(suma2)
const resta2 = operacion2('resta',3,4);
console.log(resta2)
