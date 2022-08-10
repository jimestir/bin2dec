const resultDiv = document.getElementById("result");
const r = /[^0-1]/g;
let bin = null;
let result = 0;
let j = 0;
function bin2dic() {
  bin = document.getElementById("input").value;
  if (r.test(bin))
    return console.log("numero invalido solo se puede suministrar 0 y 1");
  if (bin.length > 9)
    return console.log("No pueden ser mas de ocho digitos suminstrados");
  else bin = "0".repeat(9 - bin.length) + bin;
  result = 0;
  j = 0;
  for (let i = 8; i >= 0; i--) {
    result += parseInt(bin[j]) * Math.pow(2, i);
    j++;
  }
  return (resultDiv.innerText = result);
}
