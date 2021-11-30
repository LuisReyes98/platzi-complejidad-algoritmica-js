import fetch from "node-fetch";

/**
 * Complejidad temporal => O(n^3)
 * Complejidad espacial => O(n^2)
 * Espacio auxiliar => O(n^2)
 * @param {*} payloadId 
 * @param {*} payloadAPI 
 * @returns 
 */
export default async function algoritmoBeta(payloadId, payloadAPI) { // Espacial O(1), O(1)

  // Temporal O(1)
  // Espacial O(1)
  let arreglosCoinciden = (arreglo1, arreglo2) => {
    // Temporal O(1)
    if (arreglo1.length != arreglo2.length) {
      // Temporal O(1)
      return false;
    }
    // Temporal O(n)
    // Espacial O(1)
    for (let i = 0; i < arreglo1.length; i++) {
      // Temporal O(1)
      if (arreglo1[i] != arreglo2[i]) {
        // Temporal O(1)
        return false;
      }
    }
    // Temporal O(1)
    return true;
  };

  // Temporal O(n)
  // Espacial O(n^2) son matrices el nivel de complejidad del arreglo de objetos
  let respuesta = await fetch(payloadAPI);// entrada de datos?

  // Temporal O(n)
  // Espacial O(n^2) son matrices el nivel de complejidad del arreglo de objetos
  let data = await respuesta.json();

  // Temporal O(1)
  // Espacial O(1)
  let payloadIdArray = payloadId.split('');

  // Temporal O(n)
  // Espacial O(1)
  for (let i = 0; i < data.length; i++) {
    // Espacial O(1)
    let payloads = data[i].rocket.second_stage.payloads;
    // Temporal O(n)
    // Espacial O(1)
    for (let j = 0; j < payloads.length; j++) {
      // Temporal O(n) el metodo arreglosCoinciden es temporal O(n)
      if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(''))) {
        // Temporal O(1)
        return true;
      }
    }
  }
  // Temporal O(1)
  return false;
}