function contar(n) {
  // el iterador i toma un poco de espacio que no estaba al inicio
  // solo hemos creado una nueva variable i, pueden se 2 bytes , 4 bytes dependiendo del valor de n
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repetir(arreglo) {
  /* se asigna un arreglo de multiples valores
    por lo cual ocupa mas espacio que una variable de dato unico
  */
  let arreglo_repedito = arreglo;
  return arreglo_repedito
}

function convertirAString(arreglo) {
  /**
   * realiza una conversion de los valores a string
   * esto aumenta el peso dentro de la memoria ya que los string poseen un peso mayor que los numeros ya que son caracteres
   */
  let result = arreglo.map(el => el.toString());
  return result
}

// console.log(convertirAString([1,2,3,4]));

/**
 * Arreglos bidimensionales
 */
function dosDimensiones(valor){
  let x = new Array(valor)
  for (let i = 0; i < valor; i++) {
    x[i] = new Array(valor).fill(0)
  }
  return x
}

console.log(dosDimensiones(5));


/**
 * En la complejiadad Espacial
 * vamos contando las variables que se van creando
 * y que tipos de variables son las que se estan creando
 */