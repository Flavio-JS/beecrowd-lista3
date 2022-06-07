var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());

if (x % 2 === 0) {
  console.log(x + 2);
} else {
  console.log(x + 1);
}
