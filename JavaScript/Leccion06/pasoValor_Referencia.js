let x = 10; //valor primitivo: notienen atributos ni metodos


//los tipos de datos primitivos se pasan por valor.
function cambiarValor(a){
    a = 20;
}
cambiarValor(x);
console.log(x);


//creacion de un objeto
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}
//los objetos se pasan por referencia
function cambiarReferencia(persona) {
    persona.nombre = "Pedro";
    persona.apellido = "Lara";
}
cambiarReferencia(persona);
console.log(persona);

