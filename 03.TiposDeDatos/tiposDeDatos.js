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


// Cadena de texto
const nombre = 'Armando';
const parrafo = 'Ad "cillum" non occaecat incididunt dolor enim nulla tempor ad.'
const parrafo2 = "Ad 'cillum' non occaecat incididunt dolor enim nulla tempor ad."
const parrafo3 = 'Ad \'cillum\' non occaecat incididunt dolor enim nulla tempor ad.'

// Número
const numero = 4;
const numero2 = -3;

// Boleano
const usuarioConectado = true;
const esMayorEdad = false;
const mayorQue = 4 > 2;
console.log(mayorQue);

// Arreglos - Arrays
const arregloNumeros = [1,2,3,4,5];
console.log(arregloNumeros)
const arregloNombres = ['Armando','Isai','Tania'];
console.log(arregloNombres);
const arreglo = ['texto', 101, true, {propiedad: 'valor'}, [1,2,3]];
console.log(arreglo);

// Objetos
const persona = {
    nombre: 'Armando',
    edad: 35,
    email: 'armando@mail.com',
    carro:{
        marca: 'Mazda',
        color: 'Blanco'
    }
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.carro);
console.log(persona.carro.color);

// Funcion
function hola(){
    console.log('Hola');
}
hola();

// Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.
const variable = null;

// Undefined
// Se usa para indicarnos que un valor no está definido
const variable2 = undefined;