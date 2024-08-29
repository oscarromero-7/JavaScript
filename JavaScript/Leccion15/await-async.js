//async y await
//await solo se puede usar dentro de una funcion
//declarada con async
async function funcionconPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con await");
    });
    console.log(await miPromesa);
}

funcionconPromesaYAwait();

//promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    console.log("Inicio de la funcion");
    let miPromesa = new Promise(resolver =>{
        setTimeout(()=> resolver("Promesa con Await y timeout"),3000);

    });
    console.log(await miPromesa);
    console.log("fin de la funcion");
}
funcionConPromesaAwaitTimeout();