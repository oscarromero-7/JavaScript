//declaracion de la funcion
function miFuncion(a, b){
    //solo se puede usar dentro de la funcion (arguments)
    console.log(arguments.length);
    return a + b;

}
//hosting: podemos llamar a la funciona antes de 
//definirla o despues de definirla


//llamar la funcion
resultado = miFuncion(2,3);
console.log(resultado);

//Declatracion de una funciones de tipo expresion
let x = function(a , b){return a +b};
resultado = x(1, 9);
console.log(resultado);

//funciones que se llaman asi misma

(function(a, b){
    console.log("Ejecutando la funcion: "+(a+b));
})(3,4);//no es una funcion reutilizable


var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
