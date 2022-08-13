const resultDiv = document.getElementById("result");
let response = document.querySelector(".response");
let modal = document.querySelector(".modal");
const r = /[^01]/g;
let bin = null;
let result = 0;
let j = 0;
let prevBin = 0;
const DIGIT__BIN = 8;
function validationBin(bin) {
  if (prevBin === bin) {
    prevBin = bin;
    return false;
  }
  prevBin = bin;
  if (r.test(bin)) {
    response.innerHTML = "Invalid number can only be supplied 0 and 1";
    return false;
  } else if (bin.length > DIGIT__BIN) {
    response.innerHTML = "Cannot be more than eight digits supplied";
    return false;
  } else return true;
}

function bin2dic(e) {
  e.preventDefault();
  bin = document.getElementById("input").value;
  bin.length < DIGIT__BIN
    ? (bin = "0".repeat(DIGIT__BIN - bin.length) + bin)
    : "";
  result = 0;
  j = 0;
  for (let i = DIGIT__BIN; i > 0; i--) {
    result += parseInt(bin[j]) * Math.pow(2, i);
    j++;
  }

  if (validationBin(bin)) {
    document.getElementById("input").value = "";
    return (resultDiv.innerText = result);
  } else {
    document.getElementById("input").value = "";
    modal.classList.toggle("visible");
  }
}
