let miPromesa = new Promise((resolver,rechazar) =>{
    let exprecion = true;
    if(exprecion == true){
        resolver("Resolvio correcto");
    }else{
        rechazar("Se produjo un error");
    }

});

//miPromesa.then(valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver)=>{
    console.log("Inicio Promesa");
    setTimeout(() => resolver("Saludos con promesa y timeout"),3000);
    console.log("Fin de la promesa");
});

promesa.then(valor => console.log(valor));
