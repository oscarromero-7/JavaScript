const ingresos=[
    new Ingreso("Salario",2300),
    new Ingreso("Venta Coche",5500)
];
const egresos =[
    new Egreso("Alquiler",500),
    new Egreso("Ropa",300)
];
let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgreso();
}
totalIngresos= () =>{
    let totalIngresos = 0;
    for(ingreso of ingresos){
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}
totalEgresos= () =>{
    let totalEgresos = 0;
    for(egreso of egresos){
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}
let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML=formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());

}
const formatoMoneda=(valor)=>{
    return valor.toLocaleString("es-PY",{style: "currency",currency:"PYG"});
}
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString("en-US",{style:"percent",minimumFractionDigits:2})
    //{style:"percent",minimumFractionDigits:2} es la deficion de un objeto
}
const cargarIngresos = ()=>{
    let ingresosHTML = "";
    for(ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML=ingresosHTML;
}

const crearIngresoHTML=(ingreso) =>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick ="eliminarIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                    
                </div>
    `;
    return ingresoHTML;
}

const cargarEgreso =()=>{
    let egresosHTML = "";
    for(egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egreso").innerHTML=egresosHTML;
}
const crearEgresoHTML=(egreso) =>{
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalIngresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick ="eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return egresoHTML;
}
const eliminarIngreso = (id) =>{
    let indiceEliminar = ingresos.findIndex(ingreso=> ingreso.id === id);
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();
}
const eliminarEgreso = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso=> egreso.id === id);
    egresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgreso();
}
const agregarDato =() =>{
    let forma = document.getElementById("forma");
    let tipo = forma['tipo'];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    if(descripcion.value !=="" && valor.value !==""){
        if(tipo.value ==="ingreso"){
            ingresos.push(new Ingreso(descripcion.value,+valor.value));
            //con el (+) hace una conversion de string a number
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value ==="egreso"){
            egresos.push(new Egreso(descripcion.value,+valor.value));
            //con el (+) hace una conversion de string a number
            cargarCabecero();
            cargarEgreso();
        }
    }
}