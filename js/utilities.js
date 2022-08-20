

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

function getReplacedElement(replaceItem, newItem) {
    let replacedElement = document.getElementById(replaceItem);
    replacedElement.innerText = newItem;
}