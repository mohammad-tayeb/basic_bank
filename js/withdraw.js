document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get the withdraw amount from the input field when the withdraw button is clicked
    const newWithdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = newWithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // check if the withdrawal amount is less than or equal to zero
    if (newWithdrawAmount <= 0) {
        alert('Please enter a valid positive amount');
        newWithdrawField.value = '';
        return;
    }

    // get the total amount of withdrawal
    const previousWithdrawAmountField = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawAmountField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // minus the withdrawal amount from the balance
    const previousTotalAmountField = document.getElementById('balance-total');
    const previousTotalAmountString = previousTotalAmountField.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

    // check if the withdrawal amount is greater than the total amount in balance
    if (newWithdrawAmount > previousTotalAmount) {
        alert('Insufficient Amount');
        newWithdrawField.value = '';
        return;
    }

    // add the previous withdrawal amount with new withdrawal amount
    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    previousWithdrawAmountField.innerText = currentWithdrawAmount;
    newWithdrawField.value = '';

    // update the total amount in the balance
    const currentTotalAmount = previousTotalAmount - newWithdrawAmount;
    previousTotalAmountField.innerText = currentTotalAmount;
});
