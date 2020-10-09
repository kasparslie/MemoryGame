// ▛▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▜ 
// ▌                    Front page scripts                  ▐
// ▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▟

    let startButton1 = document.getElementById("startBtn1");
    let startButton2 = document.getElementById("startBtn2");
    let startButton3 = document.getElementById("startBtn3");
    let inputBox = document.getElementById("playerName");
    let playerName, chosenLevel, chosenCards, chosenTime;

// ╭───────────────────────────────────────────────────────────╮
// │ This is the difficulty level selection                    │
// ├───────────────────────────────────────────────────────────┤
// │ In easy mode, player will has a board of 8 cards (4x2)    │
// │ In normal mode, player will has a board of 16 cards (8x2) │
// │ In hard mode, player will has a board of 20 cards (10x2)  │
// ╰───────────────────────────────────────────────────────────╯

    // Button 1 is the easy mode
    startButton1.addEventListener("click", function () {
        chosenLevel = localStorage.chosenLevel = "easy";
        chosenCards = localStorage.chosenCards = 4;
        chosenTime = localStorage.chosenTime = 20;
        chosenSet = localStorage.chosenSet = 9;
        getPlayerName();
    })

    // Button 2 is the normal mode
    startButton2.addEventListener("click", function () {
        chosenLevel = localStorage.chosenLevel = "normal";
        chosenCards = localStorage.chosenCards = 8;
        chosenTime = localStorage.chosenTime = 40;
        chosenSet = localStorage.chosenSet = 14;
        getPlayerName();
    })

    // Button 3 is the hard mode
    startButton3.addEventListener("click", function () {
        chosenLevel = localStorage.chosenLevel = "hard";
        chosenCards = localStorage.chosenCards = 10;
        chosenTime = localStorage.chosenTime = 50;
        chosenSet = localStorage.chosenSet = 16;
        getPlayerName();
    })

// ╭────────────────────────────────────────────╮
// │ This is the player name selection function │
// │ It will be called when clicking a button   │
// ╰────────────────────────────────────────────╯

    function getPlayerName() {
        // If input box is empty, then assign a random name and store it in localstorage
        if (inputBox.value === "") {
            playerName = ["Mario", "Luigi", "Kirby", "Sonic", "Kratos",
                "Snake", "Bowser", "Ezio", "Yoshi"];
            playerName = playerName.sort(() => Math.random() - 0.5);
            playerName = localStorage.playerName = playerName[0];
        }
        // If player has inserted a name, store it in localstorage
        else if (inputBox.value != "") {
            playerName = localStorage.playerName = inputBox.value;
        }
    }