let edad = 17,
  adulto = 18;

if (edad >= adulto) {
  console.log("Es un adulto");
} else {
  console.log("Es menor de edad");
}
//operador &&
let a = 5;
let valMin = 0,
  valMax = 10;
if (valMin <= a &&  a <= valMax) {
  console.log("Dentro del rango");
} else {
  console.log("Fuera del rango");
}
//operador ||
let vacaciones = false, diaDescanso = true;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir");
}else{
    console.log("El padre no puede asistir");
}
