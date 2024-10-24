//crea un vector con los numeros del 1 al 10 . luego recorrelo y suma todos los numeros del vector y
// muestra el resultado de la suma 

//definir el vector numerico

let Numeros = [1,2,3,4,5,6,7,8,9,10] ;

//definir variable para la suma

let Resultado = 0 ;

//recorrer el vector 

for(let i = 0; i <Numeros.length; i++) {
    //Acumulador - suma

    Resultado = Resultado + Numeros [i];
}

//Imprimir el resultado 

console.log(Resultado);
 

