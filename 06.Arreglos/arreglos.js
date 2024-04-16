const arreglo = ['Texto', 456.7, false, {propiedad: 'valor'}, [1,2,3]];
console.log(arreglo);

const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[2]);

const colores = [];
colores[0] = 'Azul';
colores[1] = 'Rojo';
colores[3] = 'Negro';
colores[3] = 'Blanco';

// console.log(colores);
console.log('El arreglo colores tiene:',colores.length, 'colores');

// Introduce un elemento al final del arreglo
colores.push('Verde');

console.log(colores);
console.log('El arreglo colores tiene:',colores.length, 'colores');
