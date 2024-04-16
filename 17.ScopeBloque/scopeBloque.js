/* 
    Blok Scope / Alcance de tipo bloque
    - Pertenecen las variables declaradas con const o let dentro de un bloque { }
    - Solo podemos acceder a ellas dentro del bloque
*/

const edad = 19;
if(edad > 17){
    const accesoPermitido = true; // Variable con alcance de tipo bloque
    console.log(accesoPermitido);

    if(true){
        console.log(accesoPermitido);
    }

    const miFuncion = () => console.log(accesoPermitido);
    miFuncion();
}


// NOTA: var no es una varible con alcance de tipo bloque, se puede llamar fuera del bloque
if(true){
    var nombre1 = 'Jose';
    const nombre2 = 'Luis';
    let nombre3 = 'Jorge';
}

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);