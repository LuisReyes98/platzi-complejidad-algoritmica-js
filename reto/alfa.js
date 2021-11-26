async function algoritmoAlfa(payloadId, payloadAPI) {
  let respuesta = await fetch(payloadAPI);
  let data = await respuesta.json();
  for (let i = 0; i < data.length; i++) {
    let payloads = data[i].rocket.second_stage['payloads'];
    for (let j = 0; j < payloads.length; j++) {
      if (payloadId == payloads[j].payload_id) {
        return true;
      }
    }
  }
  return false;
}