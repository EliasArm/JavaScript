/*
    Estructura de una clase:
    - Definición
    - Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades
    - Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
    - Metodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/
console.log(' --- Clase Usuario --- ');
class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        console.log('Usuario registrado');
    }
    obtenerNombreCompleto(){
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}

const usuario1 = new Usuario('Elías Armando','González 8a');
console.log(usuario1);
console.log(usuario1.nombre);
console.log(usuario1.obtenerNombreCompleto());


// Clase persona
console.log(' --- Clase Persona --- ');

class Persona {
    constructor(nombre, edad, email){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
    obtenerDatos(){
        console.log('Obteniendo datos... ');
        return `Nombre ${this.nombre}, edad ${this.edad}, correo ${this.email}`;
    }
}

const persona1 = new Persona('Elías Armando', 36, 'armando@mail.com');
console.log(persona1.obtenerDatos());

// Clase Calculadora
console.log(' --- Clase calculadora --- ');

class Calculadora {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    suma(){
        return `Suma: ${this.x + this.y}`;
    }
    resta(){
        return `Resta: ${this.x - this.y}`;
    }
    multiplicacion(){
        return `Multiplicación: ${this.x * this.y}`;
    }
}

const calculadora1 = new Calculadora(3,2);
console.log(calculadora1.suma());
console.log(calculadora1.resta());
console.log(calculadora1.multiplicacion());

// Clase mascota
console.log(' --- Clase mascota --- ');

class Mascota{
    tipo = 'perro';

    constructor(nombre, edad, talla){
        this.nombre = nombre;
        this.edad = edad;
        this.talla = talla;
    }
    obtenerAñoPerro(){
        if (this.talla === 'pequeño'){
            switch(this.edad){
                case 1:
                    return(`${this.nombre} tiene 20 años humanos`);
                    break;
                case 2:
                    return(`${this.nombre} tiene 28 años humanos`);
                    break;
                case 3: 
                    return(`${this.nombre} tiene 32 años humanos`);
                    break;
                default:
                    return(`${this.nombre} ya esta viejito`);                    
            }
        } else {
            return(`${this.nombre} no es un perro pequeño.`);                    
        }
    }
}

const mascota = new Mascota('Morris', 3, 'pequeño');
console.log(mascota);
console.log(mascota.obtenerAñoPerro());
