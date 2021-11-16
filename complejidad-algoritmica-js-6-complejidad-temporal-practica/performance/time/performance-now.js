const perf = require('perf_hooks');

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let inicio = perf.performance.now();
contar(5);
let final = perf.performance.now();
let duration = final - inicio;

console.log(`el algoritmo contar a durado ${duration} ms`);