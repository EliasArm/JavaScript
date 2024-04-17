/*
    Break
    La sentencia break nos sirve para salir de bloques de tipo Switch.
    Pero tambien nos sirve para forzar la salida de un ciclo.
*/
const nombres = ['Arturo','Andres','Alejandro','Roberto','Adrian','Antonio','Angel'];
console.log(' --- break --- ');
for(let i = 0; i < nombres.length; i++){
    if(nombres[i][0] !== "A"){
        console.log('ALTO!, Hay un nombre que no empieza con la letra A');
        console.log(nombres[i] + ' no empieza con la letra A');
        break;
    }
    console.log(nombres[i]);
}

/*
    Continue
    La sentencia continue nos sirve para saltar a la siguiente iteración.
*/
console.log(' --- continue --- ');
for(let i = 0; i < nombres.length; i++){
    if(nombres[i][0] !== 'A'){
        continue;
    }
    console.log(nombres[i]);
}

console.log(' --- Lista de invitados --- ');
const invitados = ['Carlos','Christian','Christopher','Jorge','Estefania','Erika','Manuel'];
for(let i = 0; i < invitados.length; i++){
    if(invitados[i] === 'Jorge'){
        continue;
    }
    console.log(invitados[i]);
}
