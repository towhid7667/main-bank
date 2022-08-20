let newDepositAmount = getInputValues('btn-deposit');

let previousDepositAmount = getElementText('deposit-data');
let currentdepositTotal = newDepositAmount + previousDepositAmount;
getReplacedElement('deposit-data', currentdepositTotal);
