// The DOMContentLoaded event fires when the initial HTML document has been completely
// loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function () {

    // This is the array of cards:
    const cardArray = [
        {
            name: "Cat 1",
            img: "./pictures/kat1.jpg"
        },
        {
            name: "Cat 1",
            img: "./pictures/kat1.jpg"
        },
        {
            name: "Cat 2",
            img: "./pictures/kat2.jpg"
        },
        {
            name: "Cat 2",
            img: "./pictures/kat2.jpg"
        },
        {
            name: "Cat 3",
            img: "./pictures/kat3.jpg"
        },
        {
            name: "Cat 3",
            img: "./pictures/kat3.jpg"
        },
        {
            name: "Cat 4",
            img: "./pictures/kat4.jpg"
        },
        {
            name: "Cat 4",
            img: "./pictures/kat4.jpg"
        }
    ]

    // This will randomize the array of objects
    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector(".container")
    
    //const resultDisplay = document.querySelector("#result")
    
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {

            console.log(cardArray.length)

            var card = document.createElement("img")
            card.setAttribute("src", "./pictures/backside.jpg")
            card.setAttribute("id", i)
            //card.addEventListener("click", flipCard)
            grid.appendChild(card)

            console.log(card)
        }
    }
 /* 
    //Check for a matching pair
    function checkForMatch(){
        var cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You got a match!")
            cards[optionOneId].setAttribute("src", "resized/white.jpg")
            cards[optionTwoId].setAttribute("src", "resized/white.jpg")
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute("src", "resized/blank.jpg")
            cards[optionTwoId].setAttribute("src", "resized/blank.jpg")
            alert("No match. Try again.")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You've found all matches!"
        }
    }

    //Flip the cards
    function flipCard() {
        var cardId = this.getAttribute("id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2){
            //this one gives it a slight delay so it doesn't happen instantly
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosen)
    }
*/
    createBoard() 
})
