
//Construnctor sin clase, para crear varios obejtos de tipos personas
//no hace falta crear clases para tener varios objetos
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}
let persona3 = new Persona("Julio","Gonzalez","jgonzalez@gmail.com");
console.log(persona3);
let persona4= new Persona("Ramon","Perez","rperez@gmail.com");
console.log(persona4);

//para agregar atributos a todos los objetos
//prototype
Persona.prototype.tel=null;
console.log(persona3.tel);
persona3.tel="123456";
console.log(persona3.tel);

//creacion de un objeto
let persona = {
    nombre: "Juan",
    apellido:"Perez",
    email:"jperez@gmail.com",
    edad: 20,
    idioma: "es",
    get lenguaje(){
        return this.idioma.toUpperCase();
    },
    set lenguaje(idioma){
        this.idioma=idioma.toUpperCase();
    },
    get nombreCompleto(){
        return (this.nombre + ' ' + this.apellido);
    }
}
console.log(persona.nombre);
//console.log(persona.nombreCompleto());
//creacion de objeto con new

let persona2 = new Object();
persona2.nombre = "Julio";
persona2.direccion="Saturno";
console.log(persona2.nombre);
persona2.nombreDireccion = function(){
    return this.nombre + this.direccion;
}
console.log(persona2.nombreDireccion());

//for in: para ver todas las propiedades
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
}
//agregacion de propiedades
persona.tel = "12345";
console.log(persona);
//eliminar propiedad
delete persona.tel;
console.log(persona);
//para imprimir en un navegador
console.log(persona.nombre + ", " + persona.apellido);

for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
//devuelve un array
let personaArray = Object.values(persona);
console.log(personaArray);
//devuelve una cadena en formato JSON
let personaString = JSON.stringify(persona);
console.log(personaString);

//con get
console.log(persona.nombreCompleto);
//como se utiliza el metodo get
console.log(persona.lenguaje);
//como se utiliza el metodo set
persona.lenguaje ="en";
console.log(persona.idioma);
