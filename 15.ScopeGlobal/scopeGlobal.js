console.log('--- Alcance de las variables ---');

/*
    Global Scope o Variables Globales
    - Son las variables declaradas fuera de una función 
    - Podemos acceder a ellas desde cualquier parte del código 
    - Podemos usar const, let y var
*/

var nombre = 'Elías';
console.log(nombre);

const saludo = () => {
    console.log(`Hola ${nombre}`);
    nombre = 'Armando';
    console.log(`El nuevo nombre es ${nombre}`);
}
saludo();