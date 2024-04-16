const usuario = {
    nombre: 'Leticia',
    pais: 'peru'
}

switch(usuario.pais){
    case 'mexico':
        console.log(`${usuario.nombre} es mexicana`);
        break;
    case 'argentina':
        console.log(`${usuario.nombre} es argentina`);
        break;
    case 'españa':
        console.log(`${usuario.nombre} es española`);
        break;
    default:
        console.log(`${usuario.nombre} es de otro país`)
}

