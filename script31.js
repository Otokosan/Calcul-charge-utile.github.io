// Get the input elements
const pvInput = document.getElementById("PV");
const ptacInput = document.getElementById("PTAC");
const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const CU = document.getElementById("CU");

// Add an event listener to the input elements
pvInput.addEventListener("input", validateInput);
ptacInput.addEventListener("input", validateInput);
calculateButton.addEventListener("click", calculate);
resetButton.addEventListener("click", reset);

function validateInput() {
  if (this.value <= 0) {
    this.setCustomValidity("Veuillez entrer une valeur positive");
  } else {
    this.setCustomValidity("");
  }
}

function calculate() {
  const PV = Number(pvInput.value);
  const PTAC = Number(ptacInput.value);

  const payload = PTAC - PV;
  CU.innerHTML = payload;
}

function reset() {
  pvInput.value = "";
  ptacInput.value = "";
  CU.innerHTML = "";
}
