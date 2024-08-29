class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona(){
        return this._idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    //sobreescribiendo el metodo de la clase padre(object)
    toString(){
        //Polimorfismo: multiples formas en tiempo de ejecucion
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo
        return this._idPersona + ", "+this._nombre + ". " +
        this._apellido + ", " + this._edad;
    }
    
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + " " + this._fechaRegistro + " " + this._idCliente;
    }
} 

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + " " + this._sueldo + " "+ this._idEmpleado;
    }
}

//prueba de la clase persona

let persona1 = new Persona("juan","Perez",28);
console.log(persona1.toString());

let persona2 = new Persona("Carlos","Garay", 35);
console.log(persona2.toString());

let persona3 = new Persona("Robert","Perez",28);
console.log(persona3.toString());
let empleado1 = new Empleado("Carlos","Ramirez",21,100000);
console.log(empleado1.toString());
let cliente1 = new Cliente ("Pedro","Perez",25,new Date());
console.log(cliente1.toString());