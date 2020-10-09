// The DOMContentLoaded event fires when the initial HTML document has been completely
// loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function () {


    // This will store the level, cards, and time from the main game_play

    let gameMode = {
        level: localStorage.chosenLevel,
        cards: parseInt(localStorage.chosenCards),
        time: localStorage.chosenTime,
        set: parseInt(localStorage.chosenSet)
    }

    // This will create the array of cards
    // Easy:   Player will have 8 cards in total
    //         Set of cards is 4 cards
    //         Picture name is easyx.jpg
    // Normal: Player will have 16 cards in total
    //         Set of cards is 14 cards
    //         Picture name is easyx.jpg
    // Hard:   Player will have 25 cards in total
    //         Set of cards is 16 cards
    //         Picture name is easyx.jpg

    let cardArray = []

    for (let i = 1; i < (gameMode.set) + 1; i++) {
        cardArray.push({
            name: `card${i}`,
            image: `./pictures/${gameMode.level}Pics/${gameMode.level}${i}.jpg`,
            clicked: false
        })
    }

    // This will randomize order of the array
    cardArray = cardArray.sort(() => Math.random() - 0.5)
    // This will reduce the array to match the maximum numbers of cards to play with
    cardArray.length = gameMode.cards

    // This will duplicate the cards
    cardArray = cardArray.reduce(function (res, current) {
        return res.concat([current, current]);
    }, []);

    // This will randomize order of the array again???????
    cardArray = cardArray.sort(() => Math.random() - 0.5)


    // This will create the board of cards
    const grid = document.querySelector(".container")
    const resultDisplay = document.querySelector("#result")
    let playerNameBox = document.querySelector("#player")

    let points = 0

    function createBoard() {
        for (let i = 0; i < (gameMode.cards * 2); i++) {
            let card = document.createElement("img")
            card.setAttribute("src", "./pictures/backside.jpg")
            card.setAttribute("id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
            playerNameBox.textContent = localStorage.playerName;
        }
    }

    let cardsChosen = []
    let cardsChosenId = []

    // This will flip the card when clicked
    function flipCard() {

        let cardId = this.getAttribute("id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].image)
        cardArray[cardId].clicked = true

        // if (cardsChosen.length === 1){
        //     setTimeout(document.getElementById(cardId).removeEventListener("click", flipCard), 5000)            
        // }
        if (cardsChosen.length === 2) {
            //this one gives it a slight delay so it doesn't happen instantly
            setTimeout(checkForMatch, 350)
            document.getElementById(cardId).addEventListener("click", flipCard);
        }
    }


    //Check for a matching pair

    function checkForMatch() {
        var cards = document.querySelectorAll("img")

        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        console.log(optionOneId)
        console.log(optionTwoId)


        if (cardsChosen[0] === cardsChosen[1] && optionOneId != optionTwoId) {
            points += 1
            // On match, prevent the player from clicking the cards again
            // to do this we disable the addeventlistener on the two cards
            document.getElementById(optionOneId).removeEventListener("click", flipCard);
            document.getElementById(optionTwoId).removeEventListener("click", flipCard);
            document.getElementById(optionOneId).style.filter = "brightness(50%)";
            document.getElementById(optionTwoId).style.filter = "brightness(50%)";
        }

        // else if (cardsChosen[0] === cardsChosen[1] && optionOneId === optionTwoId) {
        //     cardsChosenId = []
        //     cardsChosen = []
        //     checkForMatch()
        // }

        else {
            cards[optionOneId].setAttribute("src", "pictures/backside.jpg")
            cards[optionTwoId].setAttribute("src", "pictures/backside.jpg")

        }
        //this resets both arrays (resets the turn)
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = points

        if (points === (gameMode.cards)) {

            resultDisplay.textContent = ""
            document.querySelector("#points").textContent = "Congratulations! You've found all matches!"
        }
    }


    // This is the restart button, will refresh the webpage
    document.getElementById("myForm").onclick = function () {
        location.reload()
    };

    // This is the timer
    setInterval(function () {
        let result = (gameMode.time = gameMode.time - 1)


        if (points === (gameMode.cards)) {
            document.getElementById('timer').textContent = `You won!`;
        }
        else if (result > 9) {
            document.getElementById('timer').innerHTML = `00:${result}`;
        }
        else if ((result < 10) && (result > 0)) {
            document.getElementById('timer').innerHTML = `00:0${result}`;
        }
        else if (result < 1) {
            document.getElementById('timer').innerHTML = `Time is finished`;
        }


        //console.log(result)

    }, 1000) //calling it every 0.5 second to do a count down

    // This is creating the board
    createBoard()
})