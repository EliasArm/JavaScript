class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPosts(){
        const posts = ['Post1','Post2'];
        return posts;
    }
}

const usuario = new Usuario ('sora','123');
console.log(usuario);
console.log(usuario.obtenerPosts());

// Ejemplo de herencia
console.log(' --- Herencia --- ');

class Moderador extends Usuario{
    constructor(usuario, password, permisos){
        super(usuario, password);
        this.permisos = permisos;
    }
    borrasPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con id ${id} ha sido borrado`);
        } else {
            console.log('No tienes permisos para borrar el post');
        }
    }
}

const usuario2 = new Moderador('sony', '456', ['crear','editar','borrar']);
console.log(usuario2);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrasPost(1);
