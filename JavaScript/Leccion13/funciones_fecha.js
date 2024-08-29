function miFuncion(){
    console.log("Saludos");
}
//funciones fecha deben ser anonimas
miFuncion();
//no aplica hosting con funciones flecha
//const para ya no modificar la referencia
// let miFuncionFecha = () => {
//     console.log("Saludos desde mi funcion fecha");
// }

// const miFuncionFecha= () => console.log("saludos");
// miFuncionFecha();

const saludar = () => {
    return "saludos desde funcion fecha";
}
console.log(saludar());

const regresaObjeto = () =>{
   return ({nombre: "Juan",
        apellido: "Perez"
    })
}
console.log(regresaObjeto());

const funcionConParametros= (mesaje) => {
    console.log(mesaje);
}
funcionConParametros("HOLA");
