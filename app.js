const cardsInDiv = document.querySelectorAll("div")

const genCards= (cardsInDiv) => {
    let cardSelection =Math.floor(Math.random()*3)+1
    for(let i = 0; i < cardsInDiv.lenght; i++)
    cardSelection = cardsInDiv[i] 
}
genCards();


