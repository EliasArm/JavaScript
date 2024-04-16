const colores = ['Rojo','Verde','Azul'];
console.log(colores);
/* 
    .length
    (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(' --- .length --- ');
console.log(colores.length);

/*
    .toString 
    Nos permite transformar un arreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador.
*/
document.body.innerHTML = colores.toString();

/* 
    .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/
console.log(' --- .join() --- ');
console.log(colores.join('-.-'));

/*
    .sort()
    Nos permite ordenar un arreglo de cadenas de texto, de forma alfabética.
*/
console.log(' --- .sort() --- ');
console.log(colores.sort());
const letras = ['d','b','f','c','e','a'];
console.log(letras);
console.log(`Arreglo original: ${letras}`);
console.log(`Arreglo ordenado: ${letras.sort()}`);
const numeros = [9,5,7,4,1,6,2,0,3,8]; 
console.log(numeros);
console.log(`Arreglo original: ${numeros}`);
console.log(`Arreglo ordenado: ${numeros.sort()}`);

/*
    .reverse()
    Nos permite ordenar un arreglo de forma descendente.
*/
console.log(' --- .reverse() --- ');
console.log(colores.reverse());
console.log(`Arreglo: ${letras}`);
console.log(`Arreglo ordenado de forma descendente: ${letras.reverse()}`);
console.log(`Arreglo: ${numeros}`);
console.log(`Arreglo ordenado de forma descendente: ${numeros.reverse()}`);

/*
    .concat()
    Nos permite juntar dos arreglos en uno solo.
*/
console.log(' --- .concat() ---')
const arreglo1 = [1,2,3];
const arreglo2 = ['A','B','C'];
console.log(`Arreglo 1: ${arreglo1}`);
console.log(`Arreglo 2: ${arreglo2}`);
const arreglo3 = arreglo1.concat(arreglo2);
console.log(`Arreglos concatenados: ${arreglo3}`);

/*
    .push()
    Nos permite agregar un elemento al final de un arreglo.
*/
console.log(' --- .push() ---')
console.log(`Arreglo original: ${colores}`);
colores.push('Amarillo');
console.log(`Arrego con un elemento al final: ${colores}`);

/*
    .pop()
    Nos permite eliminar el último elemento de un arreglo
*/
console.log(' --- .pop() ---');
colores.pop();
console.log(`Arreglo sin el último elemento: ${colores}`);

/*
    .shift()
    Elimina el primer elemento de un arreglo 
*/
console.log(' --- .shift() --- ');
colores.shift();
console.log(`Arreglo sin el primer elemento: ${colores}`);

