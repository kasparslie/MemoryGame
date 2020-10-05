// This is the array containing the card details
// "name" defines the card itself, ex: cat, book, plane, etc.
// "name" will be used to compare the cards
// "image" points to the JPG/PNG/SVG

const cardImages = [
    {
        name: "bwifi",
        image: "https://i.ibb.co/0hRV0Gc/b8Km1.png"
    },
    {
        name: "cloud",
        image: "https://i.ibb.co/kxqnpGZ/resized-3-ZGvh.png"
    },
    {
        name: "footsteps",
        image: "https://i.ibb.co/VNZbB7K/resize-icon4-svg.png"
    },
    {
        name: "dialog",
        image: "https://i.ibb.co/MBXQS2K/resize-dialog.png"
    },
    {
        name: "feather",
        image: "https://i.ibb.co/1rq8rx0/resize-feather.png"
    },
    {
        name: "finger",
        image: "https://i.ibb.co/9GMS5z0/resize-finger.png"
    },{
        name: "feather",
        image: "https://i.ibb.co/1rq8rx0/resize-feather.png"
    },
    {
        name: "finger",
        image: "https://i.ibb.co/9GMS5z0/resize-finger.png"
    },
    {
        name: "feather",
        image: "https://i.ibb.co/1rq8rx0/resize-feather.png"
    },
    {
        name: "finger",
        image: "https://i.ibb.co/9GMS5z0/resize-finger.png"
    }
];

// This is a variable pointing to the card container in HTML
const cardsContainer = document.querySelector(".container")

// This is the function that will add the DIV card elements to the DOM
function createCard(imageUrl, id) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("src", "./pictures/blank.jpg")
    cardsContainer.appendChild(card);
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    card.appendChild(cardImg);

}

// This is the loop that will create the DIVs by using the function
for (let i = 0; i < cardImages.length; i++) {
    createCard(cardImages[i].image, cardImages[i].id);
    cardImg.setAttribute("id", id);
}

// When we have the cards then we can start working on the values to be compared later on

// After we can work on the click funcionallity, first the 1st click

// document.querySelector("#id").onclick = console.log("#id")

//console.log(document.querySelector("#id").value)


let test = document.getElementsByClassName("card-img")[0]
document.getElementsByClassName("card-img")[0].onclick = () => {
    console.log(document.getElementsByClassName("card-img")[0].id)
}


for (let i = 0; i < document.getElementsByClassName('card-img').length; i++) {
    //    console.log(document.getElementsByClassName('card-img')[i].id)

    document.getElementsByClassName("card-img")[i].onclick = () => {
        console.log(document.getElementsByClassName("card-img")[i].id)
    }

}


// for (let i = 0; i < setOfCards.length; i++) {
//     setOfCards[i].addEventListener("click", function () {

//         //console.log(`Card is ${setOfCards[i].id}`)
//         var cardClick1 = (`Card is ${setOfCards[i]}`)
//         //var cardClick1 = i
//         //console.log(setOfCards[i].name)
//         //console.log(setOfCards[i].id)
//         return cardClick1 = (`Card is ${setOfCards[i]}`)

//     })
// }
// console.log(cardClick1)



 /*   //Flip the cards
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
    } */