document.getElementById('btn-withdraw').addEventListener('click', function () {
    let newWithdrawAmount = getInputValues('withdraw-amount');


    let previousWithdrawAmount = getElementText('withdraw-data');


    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-data', newWithdrawTotal);

    let previousbalance = getElementText('balance-data');
    let newBalance = previousbalance - newWithdrawAmount;
    setTextElementValueById('balance-data', newBalance);

})
