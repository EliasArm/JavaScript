const nombres = ['Carlos','Rafael','Estefania', 'Rodrigo','Rafael','Gema','Diana','Sara'];
console.log(nombres);

/*
    .includes()
    Nos permite saber si el arreglo contiene un elemento especificado.
    Regresa verdadedo o falso.
*/
console.log(' --- .includes() ---');
const contieneNombre = nombres.includes('Rafael');
console.log(contieneNombre);

console.log(nombres.includes('Armando'));

/*
    .every()
    Nos permite ejecutar un condicional sobre cada elemento y 
    nos devielve true si TODOS los elementos cumplen la condición.
*/
console.log(' --- .every() --- ');
const nombresValidos = nombres.every((nombre) => {
    if(typeof nombre === 'string'){
        return true;
    }else{
        return false
    }
});
console.log('¿Todos los nombres son validos?: ' + nombresValidos);

/*
    .some()
    Nos permite ejecutar un condicional sobre cada elemento y 
    nos devuelve true si algun elemento cumplió la condición.
*/
console.log(' --- .some() --- ');
const nombresInvalidos = nombres.some((nombre) => {
    if(typeof nombre !== 'string'){
        return true
    }else{
        return false
    }
});
console.log('¿El arreglo de nombres es invalido?: ' + nombresInvalidos);