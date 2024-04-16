/*
    Tipos de datos que podemos guardar en las variables:
    string - Cadena de texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

    null - Valor nulo
    undefined - Valor sin definir
*/

var edad = 36;
console.log(edad);
// La palabra reservada "var" actualmente es poco utilizada. 
// Para la declaración de variables se usara "let" o "const"
let nombre = 'Elías';
const correo = 'correo@mail.com';
console.log(nombre+"\n"+correo);

// Variables con let
let telefono, pais, id;
telefono = '2281509775';
console.log(telefono);


// Operaciones aritméticas
const resultado = 6 + 4;
console.log(resultado);

// Cadenas
const nombre1 = 'Elías ';
const nombre2 = 'Armando';
const nombreCompleto = nombre1 + nombre2
console.log(nombreCompleto);

// En Javascript se puede cambiar el valor y el tipo de la variable
let miVariable = 'texto';
miVariable = 8;
