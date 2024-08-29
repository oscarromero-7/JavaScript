let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        //return  this.nombre + " " + this.apellido;
        return  titulo +" "+ this.nombre + " " + this.apellido + " "+tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}
//call para usar metodos de otro objeto
console.log(persona1.nombreCompleto("Lic","12345"));

//apply se debe de pasar como segundo parametro un vector con los argumentos
let arreglo = ["Ing","78945"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));