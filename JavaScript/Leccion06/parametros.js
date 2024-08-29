//agregando valores por defecto a los argumentos
//por si no le pasamos valores a nuestro parametros
//toman los valores por defecto
let sumar = function (a = 4,b = 1) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    
    return a + b;
}
let resultado = sumar(1,4);
console.log(resultado);