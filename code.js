const resultDiv = document.getElementById("result");
let response = document.querySelector(".response");
let modal = document.querySelector(".modal");
const r = /[^0-1]/g;
let bin = null;
let result = 0;
let j = 0;
function bin2dic() {
  bin = document.getElementById("input").value;
  if (bin.length === 0) return;

  if (bin.length > 9) {
    document.getElementById("input").value = "";
    modal.classList.toggle("visible");
    return (response.innerHTML = "Cannot be more than eight digits supplied");
  } else {
    bin = "0".repeat(9 - bin.length) + bin;
  }
  if (r.test(bin)) {
    document.getElementById("input").value = "";
    modal.classList.toggle("visible");
    return (response.innerHTML = "Invalid number can only be supplied 0 and 1");
  }
  result = 0;
  j = 0;
  for (let i = 8; i >= 0; i--) {
    result += parseInt(bin[j]) * Math.pow(2, i);
    j++;
  }
  return (resultDiv.innerText = result);
}
