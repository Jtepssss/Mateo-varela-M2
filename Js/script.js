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

let vector = [];
//inicializar un vector con informacion

let Numeros = [9, 10, 23, 3, 4, 11, 50, 99];

let Nombres = ["mateo", "francisco ", "andres ", "pacho "];

let logicos = [true, false, true, false];

//como se muestra la informacion de un vector

console.log(Nombres);
//Mostrar todo el valor
console.log(logicos);
console.log(Numeros);
//mostrar un valor especifico

console.log(Numeros[2]);

//Como se recorre un vector

for (let i = 0; i < Numeros.length; i++) {
  console.log(Numeros[i]);
}

for (let i = 0; i < Nombres.length; i++) {
  console.log(Nombres[i]);
}

for (let i = 0; i < logicos.length; i++) {
  console.log(logicos[i]);
}

//Como agregar datos en un vector

Numeros.push(300, 500, 100);

console.log(Numeros);

Nombres.push("Laura", "Martin");

console.log(Nombres);

logicos.push(true, false, true, true);

console.log(logicos);

//Como se elimina datos de un vector

Numeros.pop();

console.log(Numeros);

Numeros.splice(4, 2);

console.log(Numeros);

// Como se hace un Acumulador

//Para hacer un acumulador debemos crear una variable que sea igual a 0 para asi poder hacer el uso del acumulador que es la siguiente variable creada para guardar el resultado + Variable creada de los datos a acumular Ej queremos sumar unos numeros y desamos saber el total de los numeros sumados enrtonces hacemos uso de un acumulador

//Creamos Varible para acumular el resultado

let resultado = 0 ;

//Creamos el vecto para los numeros a sumar

let NumerosAsumar = [45, 4, 9, 11, 61, 98, 89, 54, 23, 67];

//Luego Hacemos un ciclo el cual nos permita recorrer el vector y hacer la suma

for (let i = 0; i < NumerosAsumar.length; i++) {
  resultado = resultado + NumerosAsumar[i];
}

//Mostramos el resultado

console.log(resultado);
