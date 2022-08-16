let response = document.querySelector(".response");
const responseResult = document.querySelector(".response--result");
const modalError = document.querySelector(".modal--error");
const backdrop = document.querySelector(".backdrop");
const modalResult = document.querySelector(".modal--result");
const r = /[^01]/;
const MAX_BIN_DIGITS = 8;

function validationBin(bin) {
  if (r.test(bin)) {
    return { result: false, msg: "Supplied number isn't a binary number" };
  }

  if (bin.length > MAX_BIN_DIGITS) {
    return {
      result: false,
      msg: "Supplied number can't have more than 8 digits",
    };
  }
  return { result: true };
}

function bin2dec(bin) {
  let result = 0;

  for (let index = 0; index < bin.length; index++) {
    result += parseInt(bin[index]) * Math.pow(2, index);
  }

  return result;
}

function renderContent(el, content) {
  el.innerHTML = content;
}

function clearInput() {
  document.getElementById("input").value = "";
}

function handleClick(e) {
  e.preventDefault();
  bin = document.getElementById("input").value;
  let isValidBinary = validationBin(bin);
  let conversionResult = 0;

  if (isValidBinary.result) {
    conversionResult = bin2dec(bin);
    clearInput();
    modalResult.classList.toggle("visible--result");
    backdrop.classList.toggle("visible--backdrop");
    renderContent(responseResult, conversionResult);
  } else {
    clearInput();
    renderContent(response, isValidBinary.msg);
    backdrop.classList.toggle("visible--backdrop");
    modalError.classList.toggle("visible--error");
  }
}
