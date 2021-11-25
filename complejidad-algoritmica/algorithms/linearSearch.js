/**
 * Complejidad Temporal -> O( n + 3 ) -> O(n)
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function linearSearch(arreglo, clave) { // O(n), O(1)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}