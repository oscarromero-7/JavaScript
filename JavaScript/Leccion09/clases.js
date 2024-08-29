//hosting no se aplica a clases
//hosting: no se pueden crear 
//obejtos de clases que todavia no se declararon la clase
class Persona{
    static contadorObjetosPersona = 0;
    email = "valor default email";// atributo de muestros objetos
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona ++;
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
        return this._nombre + ' '+this._apellido;
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

let persona1 = new Persona("Juan","Perez");
/*//utilizacion metodo get
console.log(persona1.nombre);
//utilizacion metodo set
persona1.nombre="Pedro";
console.log(persona1.nombre);

let persona2 = new Persona("Carlos","Lara");
console.log(persona2.apellido);*/

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
let empleado1 = new Empleado("Oscar","Gonzalez","Informatica");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
Persona.saludar();

//a un metodo estatico si se le puede pasar un objeto;
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);
// los atributos tambien deben ser accedidos con la clase
console.log(Persona.contadorObjetosPersona);
// lasclases hijas tambien pueden acceder a los static del padre


console.log(persona1.email);
console.log(empleado1.email);

