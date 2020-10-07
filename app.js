// This will import the player name from front-page
//import {playerName} from "./front-page.js"
console.log("fffffffffff")
//console.log(playerName)


// The DOMContentLoaded event fires when the initial HTML document has been completely
// loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function () {

    // This is the array of cards:
    const cardArray = [
        {
            name: "Cat1",
            img: "./pictures/kat1.jpg",
            img2: "./pictures/backside.jpg"
        },
        {
            name: "Cat1",
            img: "./pictures/kat1.jpg",
            img2: "./pictures/backside.jpg"
        },
        {
            name: "Cat2",
            img: "./pictures/kat2.jpg",
            img2: "./pictures/backside.jpg"
        },
        {
            name: "Cat2",
            img: "./pictures/kat2.jpg",
            img2: "./pictures/backside.jpg"
        },
        {
            name: "Cat3",
            img: "./pictures/kat3.jpg",
            img2: "./pictures/backside.jpg"
        },
        {
            name: "Cat3",
            img: "./pictures/kat3.jpg",
            img2: "./pictures/backside.jpg"
        },
        {
            name: "Cat4",
            img: "./pictures/kat4.jpg",
            img2: "./pictures/backside.jpg"
        },
        {
            name: "Cat4",
            img: "./pictures/kat4.jpg",
            img2: "./pictures/backside.jpg"
        }
    ]

    // This will randomize the array of objects
    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector(".container")
    const resultDisplay = document.querySelector("#result")
    let playerNameBox = document.querySelector("#player")
    
    var cardsChosen = []
    var cardsChosenId = []
    var points = 0

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "./pictures/backside.jpg")
            card.setAttribute("id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)

            playerNameBox.textContent = localStorage.playerName;
        }
    }

    //let numOfcard = 6
    //let difficultyLevel = "easy"

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
    }
    
    //Check for a matching pair
    function checkForMatch(){
        var cards = document.querySelectorAll("img")

        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            points += 1
        }else{
            cards[optionOneId].setAttribute("src", "pictures/backside.jpg")
            cards[optionTwoId].setAttribute("src", "pictures/backside.jpg")
        }
        //this resets both arrays (resets the turn)
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = points
        
        if (points === cardArray.length/2) {
            resultDisplay.textContent = ""
            document.querySelector("#points").textContent = "Congratulations! You've found all matches!"
        }
    }
    createBoard() 

    console.log(localStorage.playerName)   
})
