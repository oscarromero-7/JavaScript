//tipo de datos string
var nombre = "Oscar";
console.log(nombre);
//tipo de dato numerico
nombre = 100;
console.log(nombre);

//tipo de dato object
//typeof para saber el tipo de dato que almacena
var objeto = {
    nombre : "Juan",
    apellido :"Perez",
    telefono : "123456"
}

console.log(objeto);
//tipo boolean
var bandera = true;
console.log(bandera);

//tipo de dato function
function mifuncion(/*Parametros*/){
    //cuerpo
}
console.log( typeof mifuncion)

//tipo de dato Symbol
var miSimbolo = Symbol("mi simbolo");
console.log(miSimbolo);

//tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        
    }
}
console.log(typeof Persona);
//tipo de dato undefined
var x;
console.log(x);
x = undefined;
console.log(typeof x);

//null = ausencia de valor;
var y = null;
console.log( typeof y);

// un arreglo (vector) es un tipo object
var autos = ["BWM","Audi","Volvo"];
console.log( autos);
console.log(typeof autos);

var z = "";
console.log(typeof z);