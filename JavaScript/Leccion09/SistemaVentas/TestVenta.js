class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._nombre =  nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){//definicion de constante
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos[this._contadorProductosAgregados++] = producto;

        }else{
            console.log("Solo puedes agregar 5 prodcutos en una orden");
        }
    }
    calcularTotal(){
        let total = 0;
        for(let producto of this._productos ){
            total += producto.precio;
        }
        return total;
    }
    mostarOrden(){
        let productoOrden = ""
        for(let producto of this._productos){
            productoOrden += '\n{' + producto.toString() + "}"
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}
let producto1 = new Producto("Pera",3000);
let producto2 = new Producto("Pantalon",150000);
let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostarOrden();

// let producto1 = new Producto("Pera",3000);
// let producto2 = new Producto("Manzana",4000);
// console.log(producto1.toString());

// let orden1 = new Orden();

// orden1.agregarProducto(producto1);
// orden1.agregarProducto(producto2);
// console.log(orden1.toString());
// console.log("Total: " + orden1.calcularTotal());