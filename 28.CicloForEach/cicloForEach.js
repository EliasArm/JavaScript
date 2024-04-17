/*
    Ciclo forEach
    Es un método de los arreglos que podemos usar para recorrer los elementos.
*/
const amigos = ['Alejandro','Cesar','Manuel'];
amigos.forEach((amigo, index) => {
    console.log(`El amigo #${index + 1} es ${amigo}`);
});

// Función de flecha en una sola línea de código
console.log(' --- Funcion de flecha en una línea --- ');
amigos.forEach((amigo,index) => console.log(`#${index + 1} ${amigo}`));
