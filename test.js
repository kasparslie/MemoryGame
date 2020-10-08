

let gameMode= {
    level: "medium",
    cards: 16
}

// This will create the array of cards
// Easy: 4 cards, and set of "easy" cards, ex: easyx.jpg
// Normal: 16 cards, and set of "normal" cards, ex: normalx.jpg
// Hard: xx cards, and set of "hard" cards, ex: hardx.jpg
// gameMode is set by the front-page button

let cardArray = []

for (i=1; i < (gameMode.cards+1); i++){
    cardArray.push({
        name: `card${i}`,
        image: `./pictures/${gameMode.level}Pics/${gameMode.level}${i}.jpg`
    })
}

cardArray = cardArray.reduce(function (res, current, index, array) {
    return res.concat([current, current]);
}, []);

console.log(cardArray)





    // This is the array of cards:
    // const cardArray = [
    //     {
    //         name: "card01",
    //         easyPics: "./pictures/easyPics/easy1.jpg",
    //         mediumPics: "./pictures/mediumPic/baboon.jpg",
    //     },
    //     {
    //         name: "card01",
    //         easyPics: "./pictures/easyPics/easy1.jpg",
    //         mediumPics: "./pictures/mediumPic/baboon.jpg"
    //     },
    //     {
    //         name: "card02",
    //         easyPics: "./pictures/easyPics/easy2.jpg",
    //         mediumPics: "./pictures/mediumPic/bull.jpg"
    //     },
    //     {
    //         name: "card02",
    //         easyPics: "./pictures/easyPics/easy2.jpg",
    //         mediumPics: "./pictures/mediumPic/bull.jpg"
    //     },
    //     {
    //         name: "card03",
    //         easyPics: "./pictures/easyPics/easy3.jpg",
    //         mediumPics: "./pictures/mediumPic/fox.jpg"
    //     },
    //     {
    //         name: "card03",
    //         easyPics: "./pictures/easyPics/easy3.jpg",
    //         mediumPics: "./pictures/mediumPic/fox.jpg"
    //     },
    //     {
    //         name: "card04",
    //         easyPics: "./pictures/easyPics/easy4.jpg",
    //         mediumPics: "./pictures/mediumPic/giraffe.jpg"
    //     },
    //     {
    //         name: "card04",
    //         easyPics: "./pictures/easyPics/easy4.jpg",
    //         mediumPics: "./pictures/mediumPic/giraffe.jpg"
    //     },
    //     {
    //         name: "card05",
    //         mediumPics: "./pictures/mediumPic/grizzly.jpg",
    //     },
    //     {
    //         name: "card05",
    //         mediumPics: "./pictures/mediumPic/grizzly.jpg"
    //     },
    //     {
    //         name: "card06",
    //         mediumPics: "./pictures/mediumPic/koala.jpg"
    //     },
    //     {
    //         name: "card06",
    //         mediumPics: "./pictures/mediumPic/koala.jpg"
    //     },
    //     {
    //         name: "card07",
    //         mediumPics: "./pictures/mediumPic/lemur.jpg"
    //     },
    //     {
    //         name: "card07",
    //         mediumPics: "./pictures/mediumPic/lemur.jpg"
    //     },
    //     {
    //         name: "card08",
    //         mediumPics: "./pictures/mediumPic/mole.jpg"
    //     },
    //     {
    //         name: "card08",
    //         mediumPics: "./pictures/mediumPic/mole.jpg"
    //     },
    //     {
    //         name: "card09",
    //         mediumPics: "./pictures/mediumPic/monkey.jpg",
    //     },
    //     {
    //         name: "card09",
    //         mediumPics: "./pictures/mediumPic/monkey.jpg"
    //     },
    //     {
    //         name: "card10",
    //         mediumPics: "./pictures/mediumPic/panda.jpg"
    //     },
    //     {
    //         name: "card10",
    //         mediumPics: "./pictures/mediumPic/panda.jpg"
    //     },
    //     {
    //         name: "card11",
    //         mediumPics: "./pictures/mediumPic/pig.jpg"
    //     },
    //     {
    //         name: "card11",
    //         mediumPics: "./pictures/mediumPic/pig.jpg"
    //     },
    //     {
    //         name: "card12",
    //         mediumPics: "./pictures/mediumPic/pug.jpg"
    //     },
    //     {
    //         name: "card12",
    //         mediumPics: "./pictures/mediumPic/pug.jpg"
    //     },        
    //     {
    //         name: "card13",
    //         mediumPics: "./pictures/mediumPic/red_panda.jpg",
    //     },
    //     {
    //         name: "card13",
    //         mediumPics: "./pictures/mediumPic/red_panda.jpg"
    //     },
    //     {
    //         name: "card14",
    //         mediumPics: "./pictures/mediumPic/sloth.jpg"
    //     },
    //     {
    //         name: "card14",
    //         mediumPics: "./pictures/mediumPic/sloth.jpg"
    //     },
    //     {
    //         name: "card15",
    //         mediumPics: "./pictures/mediumPic/tiger.jpg"
    //     },
    //     {
    //         name: "card15",
    //         mediumPics: "./pictures/mediumPic/tiger.jpg"
    //     },
    //     {
    //         name: "card16",
    //         mediumPics: "./pictures/mediumPic/wolf.jpg"
    //     },
    //     {<
    //         name: "card16",
    //         mediumPics: "./pictures/mediumPic/wolf.jpg"
    //     }            
    // ]