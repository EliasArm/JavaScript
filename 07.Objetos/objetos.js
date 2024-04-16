const persona = {
    nombre: 'Leticia',
    edad: 35,
    email: 'leti@mail.com',
    trabaja: true,
    susbcriciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Rojo','Azul','Negro'],
    // Metodo - Funcion dentro del objeto
    saludo: function(){
        alert('Hola');
    }
};

console.log(persona);

console.log(persona.nombre);
console.log(persona['edad']);

const variable = 'email';
console.log(persona[variable]);

console.log(persona.susbcriciones.correo);

// Agregar una nueva propiedad al objeto
persona.pais = 'México';

// Sobreescribir el valor de la propiedad del objeto 
persona.email = 'laura@mail.com';

console.log(persona);

// Funciones dentro del Objeto, se conocen como Metodos

persona.saludo();