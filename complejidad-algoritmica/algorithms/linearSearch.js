/**
 * Complejidad Temporal -> O( n + 3 ) -> O(n)
 * Complejidad Espacial -> O( n + 1 ) -> O(n)
 * Espacio Auxiliar = Complejidad Espacial - Espacio de entrada
 * Espacio Auxiliar = Complejidad Espacial sin el Espacio de entrada
 * Espacio Auxiliar -> O( 1 )
 */
function linearSearch(arreglo, clave) { // O(n), O(1)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}