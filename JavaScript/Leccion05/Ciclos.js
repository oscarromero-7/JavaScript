let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}

/*
do{
    instrucciones
}while(condicion);

*/
contador = 0;
do{
    console.log(contador);
    contador++
}while(contador < 3);

//for y break
for(let i = 0; i < 10; i++){
    
    if(i % 2 == 0 && i != 0){
        console.log(i);
        break;
    }
}
//comparacion extricta (!==) (===) 
for(let i = 0; i < 10; i++){
    
    if(i % 2 !== 0 && i != 0){
        continue;
    }
    console.log(i);
}
// etiquetas
inicio://etiqueta
for(let i = 0; i < 10; i++){
    
if(i % 2 !== 0 && i != 0){
    continue inicio;//indicamos la etiquetas a donde queremos ir
}
console.log(i);
}