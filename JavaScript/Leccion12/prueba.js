"use strict"
let resultado = "";

try{
    if( isNaN(resultado)) throw 'No es un numero';//para lanzar errores personalizadas
    else if(resultado === '') throw 'Es cadena vacia';
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("termina la revision de errores");
}