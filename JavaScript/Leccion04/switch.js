let numero = 3;
let numeroTexto = "Valor desconocido";
///comparacion extricta tambien compara 
//tipo en la caso de switch
switch (numero){
    case 1:
        numeroTexto = "Numero Uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    default:
        numeroTexto="Caso no encontrado";
        break;
}

console.log(numeroTexto);