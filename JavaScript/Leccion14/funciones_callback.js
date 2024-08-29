function miFuncion1(){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2");
}
miFuncion1();
miFuncion2();
//funciones de tipo callback
//se le pasa toda la funcion como parametro
//la funcion que recibe puede usar la funcion recibida como parametro
//sirve para hacer llamadas asincronas con setT
function imprimir(mensaje){
    console.log(`resultado: ${mensaje}`);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(res);
}
//las funciones son obejtos
sumar(5,3,imprimir);
//llamadas asincronas con el uso de setTimeout
function miFuncionCallback(){
    console.log("saludos asincrono");
}
//1 parametro: la funcion, 2 parametro: tiempo despues en milisegundos
setTimeout(miFuncionCallback,3000);

setTimeout(function(){console.log("Saludos asincrono 2")}, 4000);

setTimeout(() => console.log("Saludo asincrono 3"),1000);

