var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numerosDeEntradas = lines.shift();
let numeros = [""];

numeros[0] = 0;

for (let i = 0; i < numerosDeEntradas; i++) {
  numeros[i] = lines.shift();
}

for (let i = 0; i <= numerosDeEntradas - 1; i++) {
  if (numeros[i] % 2 === 0) {
    if (numeros[i] > 0) {
      console.log(`EVEN POSITIVE`);
    } else if (numeros[i] < 0) {
      console.log(`EVEN NEGATIVE`);
    } else {
      console.log(`NULL`);
    }
  } else {
    if (numeros[i] > 0) {
      console.log(`ODD POSITIVE`);
    } else if (numeros[i] < 0) {
      console.log(`ODD NEGATIVE`);
    } else {
      console.log(`NULL`);
    }
  }
}
