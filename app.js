

const gen= (computerInput) => {
    computerInput = Math.floor(Math.random(computerInput)*3)+1
    randomCard = computerInput
}

const card = document.createElement("div");
  card.classList.add("card");
