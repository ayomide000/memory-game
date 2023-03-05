const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random()); // shortcut to sort arrays using Math random method

const gridDisplay = document.querySelector("#grid ");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// check match function

function checkMatch() {
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  // console.log(optionOneId);
  const cards = document.querySelectorAll("#grid img ");
  // console.log(cards);
  // console.log("check for match");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image!");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You have a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    // console.log(cards[optionOneId]);
    cards[optionTwoId].setAttribute("src", "images/white.png");

    cards[optionOneId].removeEventListener("click", (e) => {
      const cardId = cardImg.getAttribute("data-id");
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenIds.push(cardId);
      // console.log(cardsChosen);
      // console.log(cardsChosenIds);
      cardImg.setAttribute("src", cardArray[cardId].img);
      // cardImg.setAttribute("src", card.img);
      if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
      }
    });
    cards[optionTwoId].removeEventListener("click", (e) => {
      const cardId = cardImg.getAttribute("data-id");
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenIds.push(cardId);
      // console.log(cardsChosen);
      // console.log(cardsChosenIds);
      cardImg.setAttribute("src", cardArray[cardId].img);
      // cardImg.setAttribute("src", card.img);
      if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
      }
    });
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations, you found them all!";
  }
}

const createBoard = () => {
  cardArray.forEach((card, index) => {
    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", "images/blank.png");
    cardImg.setAttribute("data-id", index);
    // console.log(cardImg);
    cardImg.addEventListener("click", function flipcard(e) {
      const cardId = cardImg.getAttribute("data-id");
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenIds.push(cardId);
      // console.log(cardsChosen);
      // console.log(cardsChosenIds);
      cardImg.setAttribute("src", cardArray[cardId].img);
      // cardImg.setAttribute("src", card.img);
      if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
      }
    });
    gridDisplay.append(cardImg);
  });
};

createBoard();
