class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada= tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){
        return `Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

// let dispositivo = new DispositivoEntrada("USB","HP");
// console.log(dispositivo.toString());
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    toString(){
        return `Raton: {Id: ${this._idRaton}, ${super.toString()}}`;
    }
}
 let raton1 = new Raton("USB","HP");
// console.log(raton1.toString());
class Teclado extends DispositivoEntrada{
    static contadorteclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorteclados;
    }
    toString(){
        return `Teclado: {Id: ${this._idTeclado}, ${super.toString()}}`;
    }
}

 let teclado1 = new Teclado("USB","HP");
// console.log(teclado1.toString());
class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca (){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
    toString(){
        return `Monitor: {Id: ${this._idMonitor}, Tamaño: ${this._tamano}, Marca: ${this._marca}}`;
    }
}

 let monitor1 = new Monitor("HP","15 pulgadas");
// console.log(monitor1.toString());

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado= teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return `Computadora: {id: ${this._idComputadora} \n Nombre: ${this._nombre} \n ${this._monitor.toString()} \n ${this._raton.toString()} \n ${this._teclado.toString()}}`;
    }
}
let computadora1 = new Computadora("Gamer",monitor1,teclado1,raton1);
let computadora2 = new Computadora("Gamer",monitor1,teclado1,raton1);
//console.log(computadora1.toString());

class Orden{
    static contadorOrdenes= 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadoras(computadora){
        this._computadoras.push(computadora);
    }
    mostarOrden(){
        let productoOrden = ""
        for(let computadora of this._computadoras){
            productoOrden +=  `\n${computadora}`;

        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${productoOrden}`);
    }
}
let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden1.mostarOrden();