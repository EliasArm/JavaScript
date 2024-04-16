console.log('--- Condicionales ---');

// Estructura de una condicional 
// if(true){
//     Código a ejecutar
// }


const usuario = {
    nombre: 'Armando',
    edad: 35,
    pais: 'rusia',
    ticket: true
}
// Ejemplo #1
if (usuario.edad > 17 && usuario.ticket){
    console.log(`${usuario.nombre} puede ingresar al concierto`);
}else{
    console.log(`${nombre} no puede ingresar al concierto`);
}

// Ejemplo #2
if(usuario.edad > 17){
    if(usuario.ticket){
        console.log(`${usuario.nombre} puede ingresar al concierto`);
    }else{
        console.log(`${usuario.nombre} no puede ingresar al concierto, no tiene ticket`);
    }
}else{
    console.log(`${usuario.nombre} no puede ingresar al concierto, es menor de edad`);
}

// Ejemplo #3 - elseif
if(usuario.pais === 'mexico'){
    console.log(`${usuario.nombre} es mexicano`);
}else if(usuario.pais === 'colombia'){
    console.log(`${usuario.nombre} es colombiano`);
}else if(usuario.pais === 'españa'){
    console.log(`${usuario.nombre} es español`);
}else{
    console.log(`${usuario.nombre} es de otro páis`);
}