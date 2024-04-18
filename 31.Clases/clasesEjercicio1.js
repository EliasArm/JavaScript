class Calificaciones {
    constructor(nombre, ingles, programacion, html){
        this.nombre = nombre;
        this.ingles = ingles;
        this.programacion = programacion;
        this.html = html;
    }
    obtenerPromedio(){
        const calificacion = (this.ingles + this.programacion + this.html) / 3;
        return `${this.nombre} tiene una calificación promedio de: ${calificacion}`;
    }
}

const calificaciones = new Calificaciones('Armando', 9, 8, 10);
console.log(calificaciones.obtenerPromedio());


/* 
    Crear una clase de nombre piedra (con class o con function) 
    con dos propiedades: masa, volumen y un método densidad 
    que calcule este valor (masa/volumen). 
    Luego instancia al menos un objeto de esta clase, 
    dale un valor a su masa y a su volumen y ejecuta el método densidad 
*/
console.log(' --- Clase Piedra --- ');

class Piedra{
    constructor(masa, volumen){
        this.masa = masa;
        this.volumen = volumen;
    }
    densidad(){
        return `Densidad: ${this.masa / this.volumen}`;
    }
}

const oro = new Piedra(194, 10);
console.log(oro.densidad());