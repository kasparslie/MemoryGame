let startButton = document.getElementById("startBtn")
let inputBox = document.getElementById("playerName")


startButton.addEventListener("click", function () {
    console.log("button has been pressed")
    let playerName
    playerName = localStorage.playerName = inputBox.value
    
    console.log(`Player name is: ${playerName}`)
})

   // This is the difficulty level selection
//    let difficultyBtn = document.getElementByClassName("difficultyBtn")

//    difficultyBtn.addEventListener("click", function () {
//     console.log("difficulty button has been pressed")
//     let difficultyLevel = {
//         difficulty: difficultyBtn.value,
//         cards: difficultyBtn.Id
//     }

//     localStorage.difficultyLevel = difficultyLevel

//         console.log(`Difficulty name is: ${difficultyLevel}`)
// })

//    switch


//    localStorage.difficulty =
//    {
//        level: whatever,
//        cards: 7
//    }