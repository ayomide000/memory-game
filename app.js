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

const createBoard = () => {
  cardArray.forEach((card, index) => {
    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", "images/blank.png");
    cardImg.setAttribute("data-id", index);
    // console.log(cardImg);
    cardImg.addEventListener("click", flipCard(cardImg));
    gridDisplay.append(cardImg);
  });
};

const flipCard = (e) => {
  const cardId = e.getAttribute("data-id");
  console.log("card clicked", cardId);
};
createBoard();
