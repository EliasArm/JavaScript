const texto = 'Hola, yo soy Armando!'
console.log(texto);

/*
    .length - Devuelve el número de caracteres de una cadena de texto.
*/
console.log(' --- .length --- ');
console.log(texto.length);

/*
    .indexOf() .lastIndexOf()
    - Devuelve el index del primer/último caracter especificado.
    - Devuelve -1 si no encuentra el valor.
*/
console.log(' --- .indexOf() ---');
console.log(`Letra 'o'`);
console.log(texto.indexOf('o'));

console.log(' --- .lastIndexOf() ---');
console.log(`Letra 'o'`);
console.log(texto.lastIndexOf('o'));

/*
    .slice() - Devuelve un fragmento de una cadena de texto.
    - 1er parametro - index desde donde queremos cortar
    - 2do parametro (opcional) - index hasta donde queremos cortar
*/
console.log(' --- .slice() --- ');
const index = texto.indexOf('A');
const nuevoTexto = texto.slice(index);
const nuevoTexto1 = texto.slice(0, 4);
const nuevoTexto2 = texto.slice(texto.indexOf('A'), texto.lastIndexOf('o')+1);
console.log(nuevoTexto);
console.log(nuevoTexto1);
console.log(nuevoTexto2);


/*
    .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
    - 1er parametro - el texto que queremos remplazar
    - 2do parametro - el texto que queremos poner
*/
console.log(' --- replace() --- ');
const nuevaCadena = texto.replace('Armando', 'Elías');
console.log(nuevaCadena);

/*
    .split() - Convierte una cadena de texto en un arreglo.
    Tenemos que especificar donde cortar cada elemento.
    - 1er parametro - el caracter que funcionara como separador.
*/
console.log(' --- .split() --- ');
const arregloTexto = texto.split(' ');
console.log(arregloTexto);


/*
    .toUpperCase() .toLowerCase()
    Devuelve una cadena de texto de puras mayusculas/minusculas
*/
console.log(' --- .toUpperCase() ---');
const textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);
console.log(' --- .toLowerCase() ---');
const textoMinusculas = texto.toLowerCase();
console.log(textoMinusculas);