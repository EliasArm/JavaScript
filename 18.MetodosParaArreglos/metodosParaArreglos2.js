/*
    .shift()
    Elimina el primer elemento de un arreglo y recorre los elementos.
*/
console.log(' --- .shift() ---');
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];
console.log(`Arreglo original: ${dias}`);
const diaEliminado = dias.shift();
console.log(`Día eliminado: ${diaEliminado}`);
console.log(`Arreglo sin el primer elemento: ${dias}`);

/*
    .unshift()
    Agrega un elemento al inicio del arreglo y empuja los elementos
*/
console.log(' --- .unshift() ---');
const diaAgregado = dias.unshift('Armando');
console.log('Arreglo de días con un nuevo elemento al inicio:');
console.log(dias);

/*
    .splice()
    Nos permite insertar elementos a un arreglo donde le especifiquemos.
    - 1er parametro - Posición donde queremos comenzar a insertar los elementos.
    - 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
    - Resto de parametros - Los elementos a insertar.
*/
console.log(' --- .splice() --- ');
const amigos = ['Alejandro','Cesar','Manuel'];
console.log('Arreglo de amigos:');
console.log(amigos);
amigos.splice(0, 0, 'Rafael','Roberto');
console.log(amigos);

/*
    .slice()
    Nos permite copiar una parte de un arreglo a otro.
    - 1er parametro - Posición desde donde queremos copiar.
    - 2do parametro - Hasta antes de qué elemento copiar.
*/
console.log(' --- .splice() ---');
const frutas = ['Fresas','Manzana','Uva','Piña','Mango','Naranja','Melon'];
console.log(frutas);
console.log('Frutas favoritas: ');
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);