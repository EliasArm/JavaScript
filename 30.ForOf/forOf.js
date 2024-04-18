/*
    Ciclo for of
    Nos permite recorrer los valores de un objeto iterable.
    Podemos recorrer: Arreglos, Cadenas de texto, Mapas y Listas de nodos, etc.
*/
const etiquetas = document.head.children;
console.log(etiquetas);

for(elemento of etiquetas){
    console.log(elemento);
}

// Transformacon de etiquetas en arreglo
console.log(' --- Transformación de a un arreglo --- ');
console.log([...etiquetas]);
[...etiquetas].forEach((elemento) => console.log(elemento));

