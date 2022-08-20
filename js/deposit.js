document.getElementById('btn-deposit').addEventListener('click', function () {
    let newDepositAmount = getInputValues('deposit-amount');


    let previousDepositAmount = getElementText('deposit-data');


    const newDepositTotal = previousDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-data', newDepositTotal);

    let previousbalance = getElementText('balance-data');
    let newBalance = previousbalance + newDepositAmount;
    setTextElementValueById('balance-data', newBalance);

})


