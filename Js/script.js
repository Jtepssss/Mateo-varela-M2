// comentario de una sola linea 

/*
aqui
todo
el 
codigo 
que 
se coloque
no
se
va
a
ejecutar
*/

//como  se inicializa un vector

let vector = [  ] ;
//inicializar un vector con informacion 

let Numeros = [9, 10 , 23 , 3 , 4 , 11 , 50 , 99] ; 


let Nombres =["mateo" , "francisco " , "andres " , "pacho "] ; 

let logicos = [true , false , true , false ] ; 

//como se muestra la informacion de un vector 

console.log (Nombres) ;
//Mostrar todo el valor
console.log (logicos) ; 
console.log (Numeros) ;
//mostrar un valor especifico 

console.log (Numeros[2]) ; 


for(let i = 0; i <Numeros.length; i++) {
    console.log(Numeros[i])
}


for(let i = 0 ; i <Nombres.length ; i++){
    console.log(Nombres[i])
}


for(let i = 0 ; i <logicos.length ; i++){
    console.log(logicos[i])
}

//Como agregar datos en un vector 

Numeros.push(300,500,100) ; 

console.log (Numeros);

Nombres.push("Laura" , "Martin") ;

console.log (Nombres) ; 

logicos.push(true , false , true , true) ; 

console.log(logicos) ; 


//Como se elimina datos de un vector 

Numeros.pop ( ) ; 

console.log (Numeros) ; 


Numeros.splice( 4 ,2 );

console.log(Numeros)