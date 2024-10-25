//Crear un  vector con los numeros del 1 al 20
//Luego recorrelo , sumar solo los numeros pares
//Mostrar el resultado

//Inicializar vector

let Numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let Resultado = 0;

//Recorrer el vector y sumar los pares

for (let i = 0; i < Numeros.length; i++) {
  //Sumar solo los pares

  if (Numeros[i] % 2 == 0) {
    //hacer el acumulador para el resultado

    Resultado = Resultado + Numeros[i];
  }
}

console.log(Resultado);


