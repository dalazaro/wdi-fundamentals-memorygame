var cards = [
    {
      rank: "queen",
      suit: "hearts",
      cardImage: "images/queen-of-hearts.png"
    },
    {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png"
    },
    {
      rank: "king",
      suit: "hearts",
      cardImage: "images/king-of-hearts.png"
    },
    {
      rank: "king",
      suit: "diamonds",
      cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
// Should checkForMatch(); go here, and have "Sorry, try again" log after the first and second turn?
};

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

flipCard(0);
flipCard(2);
checkForMatch(); //or should it go here, and have "Sorry, try again" log after only the second turn?
