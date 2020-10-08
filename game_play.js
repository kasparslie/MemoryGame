// Temporary solution to get the difficuly level
let gameMode = {
    level: "hard",
    cards: 16,
    time: 15
}



// This will import the player name from front-page
//import {playerName} from "./front-page.js"
//console.log(playerName)


// The DOMContentLoaded event fires when the initial HTML document has been completely
// loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function () {


    // This will create the array of cards
    // Easy: 4 cards, and set of "easy" cards, ex: easyx.jpg
    // Normal: 16 cards, and set of "normal" cards, ex: normalx.jpg
    // Hard: xx cards, and set of "hard" cards, ex: hardx.jpg
    // gameMode is set by the front-page button

    let cardArray = []

    for (i = 1; i < (gameMode.cards + 1); i++) {
        cardArray.push({
            name: `card${i}`,
            image: `./pictures/${gameMode.level}Pics/${gameMode.level}${i}.jpg`
        })
    }

    // This will duplicate the cards
    cardArray = cardArray.reduce(function (res, current, index, array) {
        return res.concat([current, current]);
    }, []);



    // This will randomize the array of objects
    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector(".container")
    const resultDisplay = document.querySelector("#result")
    let playerNameBox = document.querySelector("#player")

    var cardsChosen = []
    var cardsChosenId = []
    var points = 0

    function createBoard() {
        for (let i = 0; i < (gameMode.cards * 2); i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "./pictures/backside.jpg")
            card.setAttribute("id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)

            playerNameBox.textContent = localStorage.playerName;
        }
    }

    //Flip the cards
    function flipCard() {

        // There is some kind of function error here
        var cardId = this.getAttribute("id")
        //console.log(this.getAttribute("id"))

        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].image)
        if (cardsChosen.length === 2) {
            //this one gives it a slight delay so it doesn't happen instantly
            setTimeout(checkForMatch, 500)

        }
    }




    //Check for a matching pair
    function checkForMatch() {
        var cards = document.querySelectorAll("img")

        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            points += 1

            // On match, prevent the player from clicking the cards again
            // to do this we disable the addeventlistener on the two cards
            document.getElementById(optionOneId).removeEventListener("click", flipCard);
            document.getElementById(optionTwoId).removeEventListener("click", flipCard);

        } else {
            cards[optionOneId].setAttribute("src", "pictures/backside.jpg")
            cards[optionTwoId].setAttribute("src", "pictures/backside.jpg")
        }
        //this resets both arrays (resets the turn)
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = points

        if (points === cardArray.length / 2) {
            resultDisplay.textContent = ""
            document.querySelector("#points").textContent = "Congratulations! You've found all matches!"
        }
    }
    createBoard()
})

document.getElementById("myForm").onclick = function () {
    location.reload()
};

//This will show an alert msg after 1 sec
// function OutOfTime(msg) {
//     alert(msg)
// }
// setTimeout(OutOfTime, 1000, "Time's up!!");

// var today = new Date()
// console.log(today)

// setInterval(function () {
//     var d = new Date(); 
//     var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet 00:00 to seconds for easier caculation
//     var timeleft = 30 - seconds % 300; // let's say 01:30, then current seconds is 90, 90%300 = 90, then 300-90 = 210. That's the time left!
//     var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds into 00:00 
//     document.getElementById('timer').innerHTML = result;

//     console.log(timeleft)

// }, 500) //calling it every 0.5 second to do a count down



//---------
// let timeNow = new Date().getTime();

// setInterval(function () {



//     let timeFuture = new Date().getTime() + 3000

//     let result = timeNow - timeFuture

//         document.getElementById('timer').innerHTML = result;

//          console.log(result)

//     }, 1000) //calling it every 0.5 second to do a count down



//var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds into 00:00 

let timerStart = gameMode.time

setInterval(function () {

    let result = (timerStart = timerStart - 1)



    if (result > 9) {
        document.getElementById('timer').innerHTML = `00:${result}`;
    }

    else if ((result < 10) && (result > 0)) {
        document.getElementById('timer').innerHTML = `00:0${result}`;
    }
    else if (result < 1) {
        document.getElementById('timer').innerHTML = `Time is finished`;
        console.log("finished")
    }


    console.log(result)

}, 1000) //calling it every 0.5 second to do a count down