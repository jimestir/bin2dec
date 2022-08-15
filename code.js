let response = document.querySelector(".response");
const responseResult = document.querySelector(".response--result");
const modalError = document.querySelector(".modal--error");
const backdrop = document.querySelector(".backdrop");
const modalResult = document.querySelector(".modal--result");
const r = /[^01]/g;
let bin = null;
let result = 0;
let j = 0;
let prevBin = 0;
const MAX_BIN_DIGITS = 8;

function validationBin(bin) {
  // if (prevBin === bin) {
  //   prevBin = bin;
  //   return false;
  // }
  // prevBin = bin;

  if (r.test(bin)) {
    renderContent(response, "Supplied number isn't a binary number");
    //response.innerHTML = "Invalid number can only be supplied 0 and 1";
    return false;
  } else if (bin.length > MAX_BIN_DIGITS) {
    renderContent(response, "Supplied number can't have more than 8 digits");
    //response.innerHTML = "Cannot be more than eight digits supplied";
    return false;
  } else return true;
}

function bin2dic(e) {
  e.preventDefault();
  bin = document.getElementById("input").value;
  bin.length < MAX_BIN_DIGITS
    ? (bin = "0".repeat(MAX_BIN_DIGITS - bin.length) + bin)
    : "";
  result = 0;
  j = 0;
  for (let i = MAX_BIN_DIGITS - 1; i >= 0; i--) {
    result += parseInt(bin[j]) * Math.pow(2, i);
    j++;
  }

  if (validationBin(bin)) {
    document.getElementById("input").value = "";
    modalResult.classList.toggle("visible--result");
    backdrop.classList.toggle("visible--backdrop");
    renderContent(responseResult, result);
  } else {
    document.getElementById("input").value = "";
    backdrop.classList.toggle("visible--backdrop");
    modalError.classList.toggle("visible--error");
  }
}

function renderContent(el, content) {
  el.innerHTML = content;
}
