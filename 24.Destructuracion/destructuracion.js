/*
    Destructuración de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
*/
console.log(' --- Para arreglos --- ');
const amigos = ['Alejandro','Cesar','Manuel'];
// const primerAmigo = amigos[0];
const[primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);
console.log(segundoAmigo);
console.log(tercerAmigo);

console.log(' --- Para objetos --- ');
const persona = {
    nombre: 'Carlos',
    edad: 27,
    pais: 'Mexico'
};

const {nombre, pais, edad} = persona;
console.log(nombre, pais, edad);

console.log(' ---Para funciones --- ');
const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(persona.nombre, persona.edad);
mostrarEdad('Armando', 35);
mostrarEdad(nombre, edad);

const mostrarEdad2 = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad2(persona);

