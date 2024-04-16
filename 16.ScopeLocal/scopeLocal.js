/*
    Local Scope o Variables Locales
    - Son las variables declaradas dentro de una función
    - Solo podemos acceder a ellas desde dentro de una función
*/

var numero = 1;

const obtenerNumeroLetras = (nombre) => {
    const numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(numero);
    }
    funcionAnidada();
}
obtenerNumeroLetras('Mayra');
