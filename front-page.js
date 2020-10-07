let buttonTobeClicked = document.getElementById("startBtn")
let inputBox = document.getElementById("playerName")

//function dataToStore () {
buttonTobeClicked.addEventListener("click", function(){
    console.log("button has been pressed")
    let playerName
    playerName = inputBox.value
    localStorage.playerName = inputBox.value
    console.log(`Player name is: ${playerName}`)
})
//}

// dataToStore ()

// const playerName = dataToStore()

// export {playerName}

//export const playerName="wheatever"