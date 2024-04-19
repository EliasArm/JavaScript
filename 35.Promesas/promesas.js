const promesa = new Promise((resolve, reject) => {
    // Accion que se ejecutara
    setTimeout(()=>{
        const exito = true;
        if(exito){
            resolve('La operación tuvo exito');
        }else{
            reject('La operación no tuvo exito');
        }
    }, 4000);
});

// Para resolve
promesa.then((mensaje) => {
    alert(mensaje);
});

// Para reject
promesa.catch((mensaje) => {
    alert(mensaje);
});

