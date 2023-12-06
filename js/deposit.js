document.getElementById('btn-deposit').addEventListener('click', function () {
    // get the amount from deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // Check if the input is a positive number
    if (parseFloat(newDepositAmountString) < 0) {
        // Display an error message or handle it as needed
        alert('Please enter a positive number for deposit.');
        return;
    }

    const newDepositAmount = parseFloat(newDepositAmountString);

    // set the amount in deposit total
    const depositTotalField = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalField.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalField.innerText = currentDepositTotal;

    // clear the deposit amount field
    depositField.value = '';

    // get the balance total
    const previousBalanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    previousBalanceTotalField.innerText = currentBalanceTotal;
});
