/*
    Operadores Aritmeticos
    = Operador de asignación. Se usa para asignar valores a una variable
    + Suma
    - Resta
    * Multiplicación
    / División
    % Modulo
    ++ Aumento
    -- Disminución
*/

const suma = 10 + 10;
const resta = 10 - 10;
const modulo = 10 % 3;

// let numero = 1;
// numero = numero + 1;
// numero --;
// console.log(numero);

/*
    Operadores de asignación
    += Suma un numero al valor de una variable
    -= Resta un numero al valor de una variable
    *= multiplica un numero al valor de una variable
    /= Divide un numero al valor de una variable
    %= Obtiene el sobrante de una división y lo asigna a la variable
*/

let numero = 10;
// numero = numero +5
// numero += 5;
// numero -= 5;
// numero *= 5;
// numero /= 5;
// numero %= 5;
// console.log(numero);

/*
    Operadores de comparación
    Nos permiten comparar valores
    ==      Igual que (Solo compara valor)
    ===     Igual en valor y tipo de valor  
    !=      Diferente (Solo compara valor)
    !==     Diferente en valor y en tipo
    >       Mayor que
    <       Menor que
    >=      Mayor o igual que
    <=      Menor o igual que
    ?       Operador ternario
*/

// const resultado = 5 > 1; //true
// const resultado = 20 > 20; //false
// const resultado = 20 >= 20 //true
// const resultado = 20 < 10; //false
// const resultado = 5 < 10; //true
// const resultado = 10 <= 10; //true
// const resultado = 10 == 10; //true
// const resultado = 10 == '10'; //true
// const resultado = 10 === '10'; //false
const resultado = 7 > 5 ? 'El primer valor el mayor que el segundo' : 'El segundo valor es mayor que el primero';

console.log(resultado);
