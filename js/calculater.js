document.getElementById('btn-per-total').addEventListener('click', function(){
    const perPlayerInputField = document.getElementById('player-input-field');
    const newPlayerAmountString = perPlayerInputField.value;
    const newPlayerAmount = parseFloat(newPlayerAmountString);
    // console.log(newPlayerAmount);
  
    perPlayerInputField.value = '';
  
    const outputTotalElement = document.getElementById('player-expenses');
    const previousOutputTotalString = outputTotalElement.innerText;
    const previousOutputTotal = parseFloat(previousOutputTotalString);
  
    const outputAddedElement = document.getElementById('total-added-player');
    const previousOutputAddedString = outputAddedElement.innerText;
    const previousAddedTotal = parseFloat(previousOutputAddedString);
  
    const newOutputTotal = previousAddedTotal * newPlayerAmount;
    outputTotalElement.innerText = newOutputTotal; 
  })