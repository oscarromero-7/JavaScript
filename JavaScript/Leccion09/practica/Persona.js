class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.idPersona = ++Persona.contadorPersonas;
    }
    get idPersona(){
        return this.idPersona;
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
        return this.idPersona + ", "+this._nombre + ". " +
        this._apellido + ", " + this._edad;
    }
    
}

