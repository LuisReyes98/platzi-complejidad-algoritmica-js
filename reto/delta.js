import fetch from "node-fetch";

/**
 * Complejidad temporal => O(n + n + n + n) = O(n)
 * Complejidad Espacial => O(x^2)
 * Espacio auxiliar => O(x^2)
 * @param {*} payloadId 
 * @param {*} payloadAPI 
 * @returns 
 */
export default async function algoritmoDelta(payloadId, payloadAPI) { // Espacial O(1), O(1)

  // temporal O(n)
  // Espacial O(x^2) son matrices el nivel de complejidad del arreglo de objetos
  let respuesta = await fetch(payloadAPI); // entrada de datos?
  // temporal O(n)
  // Espacial O(x^2) son matrices el nivel de complejidad del arreglo de objetos
  let data = await respuesta.json();
  // temporal O(1)
  // espacial O(1)
  let listaDePayloads = [];
  // temporal O(1)
  let longitudData = data.length;

  // temporal O(n)
  // espacial O(1)
  for (let i = 0; i < longitudData; i++) {
    // temporal O(1)
    // espacial O(1)
    let payloads = data[i].rocket;
    // temporal O(1)
    // espacial O(n)
    listaDePayloads.push(...payloads.second_stage['payloads']);
  }

  // temporal O(n)
  // espacial O(1)
  for (let i = 0; i < listaDePayloads.length; i++) {
    // temporal O(1)
    // espacial O(1)
    let localPayloadId = listaDePayloads[i].payload_id;
    if (localPayloadId == payloadId) {
      // temporal O(1)
      return true;
    } else {
      // temporal O(1)
      return false;
    }
  }
}