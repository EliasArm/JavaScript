/*
    Operador Spread ...
    Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio
*/
console.log(' --- Arreglos --- ');
const frutas = ['Manzana','Pera','Naranja'];
console.log(frutas);
const comidaFavorita = ['Tacos','Pasta', ...frutas];
console.log(comidaFavorita)

console.log(' --- Objetos --- ');
const datosLogin = {
    correo: 'armando@mail.com',
    password: 'arm123'
};
console.log(datosLogin);

const usuario = {
    nombre: 'Armando',
    edad: 35,
    ...datosLogin
};
console.log(usuario);