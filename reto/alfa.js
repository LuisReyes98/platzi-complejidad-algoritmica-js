import fetch from "node-fetch";

/**
 * Complejidad temporal => O(n+n + n * (1 + n * (1 + 1)) + 1) = O(2n + n^2) = O(n^2)
 *
 * Complejidad Espacial => O( 1 + 1 + x^2 + x + 1 + x + 1) = O(x^2)
 * Espacio Auxiliar => O(x)
 *
 * @param {*} payloadId
 * @param {*} payloadAPI
 * @returns
 */
export default async function algoritmoAlfa(payloadId, payloadAPI) { // Espacial O(1), O(1)
  // temporal O(n)
  // Espacial O(x^2)
  let respuesta = await fetch(payloadAPI); // entrada de datos?

  // temporal O(n)
  // Espacial O(x)
  let data = await respuesta.json();

  // Temporal O(n)
  // Espacial O(1)
  for (let i = 0; i < data.length; i++) {
    // Temporal O(1)
    // Espacial O(x)
    let payloads = data[i].rocket.second_stage['payloads'];

    // Temporal O(n)
    // Espacial O(1)
    for (let j = 0; j < payloads.length; j++) {
      // Temporal O(1)
      if (payloadId == payloads[j].payload_id) {
        // Temporal O(1)
        return true;
      }
    }
  }
  // Temporal O(1)
  return false;
}