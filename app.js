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
        name: "finger",
        image: "https://i.ibb.co/9GMS5z0/resize-finger.png"
    }];


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

// cardImg.addEventListener("click", function(){
//     console.log(cardImg)
// })

const setOfCards = document.querySelectorAll('.card-img');

//console.log(typeof(setOfCards))


function asd(){
    for (let i=0;i<setOfCards.length;i++) {
        setOfCards[i].addEventListener("click", function() {
       
        //console.log(`Card is ${setOfCards[i].id}`)
        var cardClick1 = (`Card is ${setOfCards[i].id}`)
        console.log(cardClick1)
            })
        }
}



// console.log(cardClick1)
// When the 1st click is working, we work on the 2nd click and the comparision.

