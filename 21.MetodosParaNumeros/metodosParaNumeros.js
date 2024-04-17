// console.log(' --- Metodos para números ---');

/*
    .toString() - Permite cambiar el valor de un tipo número a un tipo de cadena de texto
*/
console.log(' --- .toString() --- ');
const numero = 9;
console.log(numero, typeof numero);
const texto = numero.toString();
console.log(texto, typeof texto);

/*
    .toFixed()
    Permite obtener un número con la cantidad de decimales especificados
*/
console.log(' --- .toFixed() --- ');
const num = 3.1415;
console.log(num);
console.log(num.toFixed(2));

/*
    parseInt()
    Intenta transformar un valor a un entero.
*/
console.log(' --- parseInt() ---');
// const numero1 = prompt('Escribe un número: ');
// console.log(numero1, typeof numero1);

// const numero2 = parseInt(prompt('Escribe un número'));
// console.log(numero2, typeof numero2);   

// console.log(parseInt(numero1) + numero2);

/*
    parseFloat()
    Intenta transformar un valor a un numero con decimales
*/
console.log(' --- parseFloat() --- ');
// const numero3 = prompt('Escribe un número decimal: ');
// console.log(numero3, typeof numero3);

// const numero4 = parseFloat(prompt('Escribe otro número decimal: '));
// console.log(numero4, typeof numero4);

// console.log(parseFloat(numero3) + numero4);

/*
    Math.random()
    Genera un número al azar entre 0 y 1
*/
console.log(' --- Math.random() ---');
const x = Math.random();
console.log(x);

/*
    Math.floor()
    Redondea hacia abajo un número
*/
console.log(' --- Math.floor() --- ');
console.log(Math.floor(10.1));
console.log(Math.floor(10.99));

/*
    Math.ceil()
    Redondea hacia arriba un número
*/
console.log(' --- Math.ceil() --- ');
console.log(Math.ceil(10.9));
console.log(Math.ceil(10.01));

/*
    Math.round()
    Redondea hacia el entero mas cercano
*/
console.log(' --- Math.round() --- ');
console.log(Math.round(10.49));
console.log(Math.round(10.5));

/*
    Ejemplo un número al azar del 0 al 100
*/
console.log(' --- Ejemplo numero al azar entre 0 y 100 --- ');
const y = Math.random();
console.log(Math.floor(y * 101));
