const nombres = ['Carlos','Christian','Christopher','Estefania','Erika','Manuel','Armando'];
// // forEach es un metodo para arreglos
// console.log(' --- forEach() --- ');
// nombres.forEach((nombre) => {
//     console.log(`Hola ${nombre}`);
// });

/*
    Ciclo For
    Repite un bloque de código mientras se cumpla una condición.

    - Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
    - Expresión 2: Una condición, mientras se cumpla se ejecuta el bloque de código.
    - Expresion 3: Esta expresión se ejecuta siempre y despues de que se ejecuta el bloque de código.
*/
console.log(' --- for --- ');

for(let i = 0; i <= 10; i = i+5){
    console.log(`${i}`);
}

// for del 50 al 1
console.log(' --- Del 50 al 1 --- ');
for(let i = 50; i > 0; i--){
    console.log(i);
}

// for en un arreglo
console.log('--- Recorrido de un arreglo --- ')
// console.log(nombres.length);
for(i = 0; i < nombres.length; i++){
    console.log(nombres[i])
}


