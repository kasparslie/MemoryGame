let startButton1 = document.getElementById("startBtn1")
let startButton2 = document.getElementById("startBtn2")
let startButton3 = document.getElementById("startBtn3")
let inputBox = document.getElementById("playerName")

let playerName, chosenLevel, chosenCards, chosenTime

// This is the difficulty level selection

startButton1.addEventListener("click", function () {

    chosenLevel = localStorage.chosenLevel = "easy"
    chosenCards = localStorage.chosenCards = 4
    chosenTime = localStorage.chosenTime = 30

    if (inputBox.value === "") {
        playerName = localStorage.playerName = "John Doe"
    }
    else if (inputBox.value != "") {
        playerName = localStorage.playerName = inputBox.value
    }
})

startButton2.addEventListener("click", function () {

    chosenLevel = localStorage.chosenLevel = "normal"
    chosenCards = localStorage.chosenCards = 8
    chosenTime = localStorage.chosenTime = 20

    if (inputBox.value === "") {
        playerName = localStorage.playerName = "John Doe"
    }
    else if (inputBox.value != "") {
        playerName = localStorage.playerName = inputBox.value
    }
})

startButton3.addEventListener("click", function () {

    chosenLevel = localStorage.chosenLevel = "hard"
    chosenCards = localStorage.chosenCards = 16
    chosenTime = localStorage.chosenTime = 18

    if (inputBox.value === "") {
        playerName = localStorage.playerName = "John Doe"
    }
    else if (inputBox.value != "") {
        playerName = localStorage.playerName = inputBox.value
    }
})