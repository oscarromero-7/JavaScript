class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()},  depto: ${this.departamento}`;
    }
}
function imprimir(tipo){
    //sirve para acceder a los atributos especifico
    //en este caso podemos acceder al atributo departamento del objeto de tipo Gerente
    //para no acceder a atributos que no posee el objeto
    //va de mejor gerarquia a mayor
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){//responde si al tipo mas generico
        console.log("Es un objeto de tipo Gerente");
    }else if(tipo instanceof Empleado){
        console.log('es un objeto de tipo Empleado');
    }
}
//polimorfismo
let gerente1 = new Gerente("Juan","Perez","Informatica");
let empleado1 = new Empleado("Pedro","Gonzalez");

imprimir(empleado1);
imprimir(gerente1);
