

function getInputValues(inputID) {
    const inputFieldElement = document.getElementById(inputID);
    const inputValueString = inputFieldElement.value;
    const inputValue = parseFloat(inputValueString);
    inputFieldElement.value = '';
    return inputValue;
}

function getElementText(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}