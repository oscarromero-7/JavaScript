class Ingreso extends Dato{
    static contadorIngresos = 0;
    constructor(descrip,valor){
        super(descrip,valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}