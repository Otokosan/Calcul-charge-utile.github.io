const calculateButton = document.querySelector("#calculate-button");
const resetButton = document.querySelector("#reset-button");
const pvtInput = document.querySelector("#pvt-input");
const pvrInput = document.querySelector("#pvr-input");
const ptacrInput = document.querySelector("#ptacr-input");
const pmaOutput = document.querySelector("#pma-output");
const cuOutput = document.querySelector("#cu-output");
const ptacOutput = document.querySelector("#ptac-output");

function calculatePayload() {
const pvt = Number(pvtInput.value);
const pvr = Number(pvrInput.value);
const ptacr = Number(ptacrInput.value);

const pma = pvt + ptacr;
const cu = pma - (pvt + pvr);
const ptac = cu + pvt + pvr;

pmaOutput.value = pma;
cuOutput.value = cu;
ptacOutput.value = ptac;
}

function resetDisplay() {
pvtInput.value = "";
pvrInput.value = "";
ptacrInput.value = "";
pmaOutput.value = "";
cuOutput.value = "";
ptacOutput.value = "";
}

calculateButton.addEventListener("click", calculatePayload);
resetButton.addEventListener("click", resetDisplay)