const nombres = ['Carlos','Rafael','Estefania','Rodrigo','Rafael','Gema','Diana','Sara'];
console.log(nombres);
/*
    .map()
    Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
    en base a los resultados de la función.
*/
console.log(' --- .map() --- ');
const nombresMayuscula1 = nombres.map((nombre) => {
    return nombre.toUpperCase();
});
console.log(nombresMayuscula1);
// ---- Función simplificada
const nombresMayuscula2 = nombres.map((nombre) =>  nombre.toUpperCase());
console.log(nombresMayuscula1);

/*
    .filter()
    Nos permite ejecutar una función por cada elemento 
    y luego crear un arreglo en base a los resultados de esa función
*/
console.log(' --- .filter() --- ');
const nombres4Letras = nombres.filter((nombre) => {
    if(nombre.length === 4){
        return nombre;
    }
});
console.log(nombres4Letras);