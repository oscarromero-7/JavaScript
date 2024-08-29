const personas =[
    new Persona("Juan","Perez"),
    new Persona("Pedro","Lara")
];
function mostrarPersonas(){
    console.log("Mostrar Personas...");
    let texto="";
    for(persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}
function agregarPersona(){
    const forma = document.getElementById("forma");
    let nombre = forma["nombre"];
    let apellido = forma["apellido"];
    if(nombre.value != "" && apellido.value != ""){
        const persona=new Persona(nombre.value,apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log("No hay informacion que agregar");
    }
   
}