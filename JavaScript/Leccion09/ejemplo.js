//hosting no se aplica a clases
//hosting: no se pueden crear 
//obejtos de clases que todavia no se declararon la clase
class Persona{
    static contadorPersonas = 0;
    //creacion de una funcion constante
    static get MAX_OBJ(){
        return 2;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }else{
            console.log("se han superado el maximo de objetos")
        }
        
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    nombreCompleto(){
        return this.idPersona + " " +this._nombre + ' '+this._apellido;
    }
    //sobreescribiendo el metodo de la clase padre(object)
    toString(){
        //Polimorfismo: multiples formas en tiempo de ejecucion
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo
        return this.nombreCompleto();
    }
    //metodos static
    static saludar(){
        console.log("saludos desde metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
    
}


class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + " " +this._departamento;
    }

  
}
let persona1 = new Persona("Juan","Perez");
let empleado1 = new Empleado("Oscar","Gonzalez","Informatica");

console.log(persona1.toString());
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);
console.log(Persona.MAX_OBJ);
let persona2 = new Persona("Juan","Perez");



