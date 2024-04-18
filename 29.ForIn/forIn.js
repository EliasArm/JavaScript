/*
    Ciclo for in
    Nos permite recorrer las propiedades de un objeto.
*/
const persona = {
    nombre: 'Armando',
    edad: 35,
    correo: 'armando@mail.com'
}

for(propiedad in persona){
    console.log('--- hola! --- ');
    console.log(propiedad);
    console.log(persona[propiedad]);
    console.log(propiedad, persona[propiedad])
}
console.log('---- ---- ---- ----');
for (propiedad in persona){
    persona[propiedad] = '';
}
console.log(persona);
