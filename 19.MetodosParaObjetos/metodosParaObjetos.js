const usuario = {
    nombre: 'Carlos',
    edad: 27,
    amigos: ['Alejandro','Cesar','Manuel'],
    saludo: () => {
        console.log('Hola!');
    }
};

/*
    Metodos propios
    Los objetos pueden tener metodos personalizados
*/
console.log(' --- Metodos propios --- ');
usuario.saludo();

/*
    Object.keys()
    Nos devuelve un arreglo con las llaves (keys) del objeto.
    (llaves - propiedades)
*/
console.log(' --- Object.keys() --- ');
const propiedades = Object.keys(usuario);
console.log(propiedades);

/*
    Object.values()
    Nos devuelve un arreglo con los valores (values) del objeto
*/
console.log(' --- Object.values() --- ');
const valores = Object.values(usuario);
console.log(valores);

/*
    Object.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
console.log(' --- Object.entries() --- ');
const resultado = Object.entries(usuario);
console.log(resultado);

