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


