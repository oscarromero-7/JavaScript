class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super.apellido(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++contadorClientes;
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
        return super.toString() + " " + this._fechaRegistro;
    }
} 