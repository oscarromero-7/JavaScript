//setInterval manda a llamar a la funcion callback cada cierto tiempo
//setTimeout manda llamar a la funcion callback una ves que se cumpla cierto tiempo

let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
setInterval(reloj,1000);//se llama cada segundo
