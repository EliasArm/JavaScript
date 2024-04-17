/*
    Ciclo While
    Es similar al ciclo for, pero con la diferencia de que solo tenemos una condicional.
    Mientras se cumpla el condicional se ejecutará el ciclo.
*/
console.log(' --- Ciclo While ---');
let contador = 0;
while(contador <= 10){
    console.log(contador);
    contador++;
}

/*
    Ciclo Do While
    Es similar al ciclo while, con la diferencia de que ejecuta el bloque de código al menos una vez.
*/
console.log(' --- Do While --- ');
let i = 100;
do {
    console.log(i);
    i++;
}while(i <= 10);