console.log("Aplicacion Calculadora");

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma['operandoA'];
    console.log(operandoA.value);
    let operandoB = forma['operandoB'];
    console.log(operandoB.value);
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    console.log(resultado);
    if(isNaN(resultado)){
        resultado = "La operacion no incluye numeros";
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}