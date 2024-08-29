class Egreso extends Dato{
    static contadorEgresos = 0;
    constructor(descrip,valor){
        super(descrip,valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}