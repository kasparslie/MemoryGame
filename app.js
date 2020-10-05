// This is the array containing the card details
// "id" will be used to compare the two cards
// "name" defines the card itself, ex: cat, book, plane, etc.
// "image" points to the JPG/PNG/SVG

const cardImages = [
    {

        id: 1,
        name: "bwifi",
        image: "https://i.ibb.co/0hRV0Gc/b8Km1.png"
    },
    {
        id: 2,
        name: "cloud",
        image: "https://i.ibb.co/kxqnpGZ/resized-3-ZGvh.png"
    },
    {
        id: 3,
        name: "footsteps",
        image: "https://i.ibb.co/VNZbB7K/resize-icon4-svg.png"
    },
    {
        id: 4,
        name: "dialog",
        image: "https://i.ibb.co/MBXQS2K/resize-dialog.png"
    },
    {
        id: 5,
        name: "feather",
        image: "https://i.ibb.co/1rq8rx0/resize-feather.png"
    },
    {
        id: 6,
        name: "readingBook",
        image: "https://www.flaticon.com/svg/static/icons/svg/3068/3068380.svg"
    }
];

// This is a variable pointing to the card container in HTML
const cardsContainer = document.querySelector(".container")

// This is the function that will add the DIV card elements to the DOM
function createCard(imageUrl, id) {
    const card = document.createElement("div");
    card.classList.add("card");
    cardsContainer.appendChild(card);

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardImg.setAttribute("id", id);
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    card.appendChild(cardImg);

}

// This is the loop that will create the DIVs by using the function
for (let i = 0; i < cardImages.length; i++) {
    createCard(cardImages[i].image, cardImages[i].id);
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




function myFunction() {
    document.getElementsByClassName("card-img")[0].style.backgroundColor = "lime";
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

//------------------------------
// const setOfCards = document.querySelectorAll('.card-img');

// let cardClick1


//------------------------------



//------------------------------
// let test1
// for (let i=0;i<5;i++) {
//     var testVar = cardImages[0].name
// }
// console.log(testVar)
//------------------------------

// When the 1st click is working, we work on the 2nd click and the comparision.

