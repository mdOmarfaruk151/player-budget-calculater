const playersArray = [];

function display(player) {
  console.log(player);
  const tableBody = document.getElementById("selected-players");
  tableBody.innerHTML = "";
  for (let i = 0; i < player.length; i++) {
    const name = player[i].playerName;

    const tr = document.createElement("tr");

    //  use ${item name} to show that one
    tr.innerHTML = `
         <th>${i + 1}</th>
         <td>${name}</td>
                                
         `;

    tableBody.appendChild(tr);
  }
}

function addToPlayer(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  const playerObject = {
    playerName: playerName,
  };

  playersArray.push(playerObject);

  if (playersArray.length === 6) {
    alert("You have already added 5 members !!! You can not add more than 5.");

    return tr;
  }

  if (playersArray.length === 6) {
    playersArray.pop(playerObject);
  }

  document.getElementById("total-added-player").innerText = playersArray.length;
  display(playersArray);
}

// ...............button disable...........................................

function disable(x) {
  x.disabled = true;
}
