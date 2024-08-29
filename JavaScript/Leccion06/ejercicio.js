
let resultado = sumarTodo(5, 4, 13, 9, 7);
console.log(resultado);
//declaracion de la funcion
function sumarTodo(){
    let resultado = 0;
    for(let i = 0; i < arguments.length; i++){
        resultado += arguments[i];
    }
    return resultado;
}