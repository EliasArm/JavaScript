const boleto = 'vip';
let codigoDeAcceso;

if(boleto === 'vip'){
    codigoDeAcceso = 'vip-123-456';
} else {
    codigoDeAcceso = 'regular-456-789';
}
console.log(codigoDeAcceso);

// Operador ternario
let codigoDeAcceso2 = (boleto === 'vip') ? 'VIP-123-456':'REGULAR-456-789';
console.log(codigoDeAcceso2);

boleto === 'vip' 
? 
console.log('Tu voleto es de tipo VIP')
: 
console.log('Tu boleto es de tipo REGULAR');