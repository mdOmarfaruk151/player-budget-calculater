document.getElementById("btn-per-total").addEventListener("click", function () {
  const newPlayerAmount = getInputFieldValueById("player-input-field");

  if (isNaN(newPlayerAmount)) {
    alert("Please Provide a Valid Amount (number)");
    return;
  }

  const outputTotalElement = document.getElementById("player-expenses");
  outputTotalElement.innerText;

  const playerAddedTotal = getTextElementValueById("total-added-player");

  const playerExpensesTotal = playerAddedTotal * newPlayerAmount;
  outputTotalElement.innerText = playerExpensesTotal;
});

// ..................................................................................

document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    const managerInputAmount = getInputFieldValueById("manager-input-field");

    if (isNaN(managerInputAmount)) {
      alert("Please Provide a Valid Amount (number)");
      return;
    }

    const coachInputAmount = getInputFieldValueById("coach-input-field");

    if (isNaN(coachInputAmount)) {
      alert("Please Provide a Valid Amount (number)");
      return;
    }

    const totalElement = document.getElementById("total");
    totalElement.innerText;

    const playerExpensesTotal = getTextElementValueById("player-expenses");

    const newBalanceTotal =
      managerInputAmount + coachInputAmount + playerExpensesTotal;
    totalElement.innerText = newBalanceTotal;
  });
