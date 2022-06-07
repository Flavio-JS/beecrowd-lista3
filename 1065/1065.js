var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numeros = ["", "", "", "", ""];

for (let i = 0; i < 5; i++) {
  numeros[i] = lines.shift();
}

let numerosPares = 0;

for (let i = 0; i <= 5; i++) {
  if (numeros[i] % 2 === 0) {
    numerosPares++;
  }
}

console.log(`${numerosPares} valores pares`);
