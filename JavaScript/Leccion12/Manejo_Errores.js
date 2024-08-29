"use strict";
try{
    //x = 10;
    mi_funcion();
    throw "Mi error";
}
catch(error){
    console.log(error);
}
finally{//siempre se ejecuta
    console.log("Termina la revision de errores");
}
console.log("continuamos...");