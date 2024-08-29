//let autos = new Array('BMW','VOLVO');//FORMA ANTIGUA
const autos = ["BMW","Mercedes Benz","Volvo"];
console.log(autos);
//comienza en el indice 0
console.log(autos[0]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : '+autos[i] );
}
autos[1] = "MercedesBenz";
console.log(autos[1]);
autos.push("Audi");
console.log(autos[autos.length -1 ]);

console.log(autos.length);
autos[autos.length] = "Toyota";

console.log(typeof autos);
//no podemos identificar si es o no un array

console.log(Array.isArray(autos));
//pregunta si es un array
console.log(autos instanceof Array);
