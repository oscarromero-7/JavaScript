let miNumero = "17x";
let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)){
    console.log("No es un numero")
}else{
    let respuesta = edad >= 18 ? "Puede votar" : "No puede votar";
    console.log(respuesta);
}
