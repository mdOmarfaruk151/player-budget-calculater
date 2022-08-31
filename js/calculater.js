document.getElementById('btn-per-total').addEventListener('click', function(){
    const perPlayerInputField = document.getElementById('player-input-field');
    const newPlayerAmountString = perPlayerInputField.value;
    const newPlayerAmount = parseFloat(newPlayerAmountString);
    // console.log(newPlayerAmount);
  
    perPlayerInputField.value = '';

    // if(isNaN(perPlayerInputField)){
    //   alert('Please Provide a Valid Amount (number)');
    //   return;
    // }
  
    const outputTotalElement = document.getElementById('player-expenses');
    const previousOutputTotalString = outputTotalElement.innerText;
    // const previousOutputTotal = parseFloat(previousOutputTotalString);
  
    const outputAddedElement = document.getElementById('total-added-player');
    const playerOutputAddedString = outputAddedElement.innerText;
    const playerAddedTotal = parseFloat(playerOutputAddedString);
  
    const playerExpensesTotal = playerAddedTotal * newPlayerAmount;
    outputTotalElement.innerText = playerExpensesTotal; 

    
  })

  // ..................................................................................

  document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerInputField = document.getElementById('manager-input-field');
    const managerAmountString = managerInputField.value;
    const managerInputAmount = parseFloat(managerAmountString);
    // console.log(managerInputAmount);
  
    managerInputField.value = '';

    // if(isNaN(managerInputAmount)){
    //   alert('Please Provide a Valid Amount (number)');
    //   return;
    // }
  

    const coachInputField = document.getElementById('coach-input-field');
    const coachAmountString = coachInputField.value;
    const coachInputAmount = parseFloat(coachAmountString);
    // console.log(coachInputAmount);
  
    coachInputField.value = '';

    // if(isNaN(coachInputField)){
    //   alert('Please Provide a Valid Amount (number)');
    //   return;
    // }
  

    const totalElement = document.getElementById('total');
    const balanceTotalString = totalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpensesTotal = parseFloat(playerExpensesString);

    const newBalanceTotal =  managerInputAmount + coachInputAmount + playerExpensesTotal;
    totalElement.innerText = newBalanceTotal;

    

  })

  
  