/*
    Parametro Rest ...
    Permite que una función contenga un número indefinido de argumentos.
    Los argumentos extra que encuentre los convertira en un arreglo.
*/
const registraUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
};

registraUsuario('Armando', 'armando@mail.com');
registraUsuario('Elías', 'elias@mail.com', 36, 'Mexico');