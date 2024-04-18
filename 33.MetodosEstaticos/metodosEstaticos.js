class Usuario {
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    borrarUsuario(id_usuario){
        console.log(`El usuario con el id: ${id_usuario}, ha sido eliminado de la base de datos`);
    }

    static borrar(id_usuario){
        console.log(`El usuario con el id: ${id_usuario}, ha sido eliminado de la base de datos`);
    }

    registrados = 1569;

    static eliminados = 86;
}

// const usuario = new Usuario('Armando','armando@mail.com');
// console.log(usuario);
// usuario.borrarUsuario(734);
Usuario.borrar(387);
console.log(Usuario.registrados);
console.log(Usuario.eliminados);