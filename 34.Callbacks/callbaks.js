const obtenerPostDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post del usuario ${usuario}`);

    setTimeout(() => {
        let posts = ['Post1','Post2','Post3'];
        callback(posts);
    },2000);
};

obtenerPostDeUsuario('usuario', (posts) => {
    console.log(posts);
});

