/*
    .indexOf()
    Obtenemos el primer index de un elemento.
    Si no hay elementos nos retorna -1
*/
console.log(' --- .indexOf() ---');
const nombres = ['Carlos','Rafael','Estefania','Rodrigo','Rafael','Gema','Diana','Sara'];
const primerIndex = nombres.indexOf('Rafael');
console.log(`Primer index del elemento 'Rafael': ${primerIndex}`);

/*
    .lastIndexOf()
    Obtenemos el último index de un elemento.
*/
console.log(' --- .lastIndexOf() --- ');
const ultimoIndex = nombres.lastIndexOf('Rafael');
console.log(`Último index del elemento 'Rafael': ${ultimoIndex}`);

/*
    .forEach()
    Nos permite ejecutar una función por cada elemento.
*/
console.log(' --- .forEach() --- ');
nombres.forEach((nombre) => {
    console.log(`Hola ${nombre}`);
});
