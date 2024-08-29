let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + " " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}
//call para usar metodos de otro objeto
console.log(persona1.nombreCompleto("Lic", "78945"));

console.log(persona1.nombreCompleto.call(persona2,"Ing","123456"));


