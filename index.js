let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let card1 = document.getElementById("cell1");
let card2 = document.getElementById("cell2");
let card3 = document.getElementById("cell3");
let card4 = document.getElementById("cell4");
let card5 = document.getElementById("cell5");
let card6 = document.getElementById("cell6");
let card7 = document.getElementById("cell7");
let card8 = document.getElementById("cell8");
let card9 = document.getElementById("cell9");
let card10 = document.getElementById("cell10");
let card11 = document.getElementById("cell11");
let card12 = document.getElementById("cell12");
let card13 = document.getElementById("cell13");
let card14 = document.getElementById("cell14");
let card15 = document.getElementById("cell15");
let card16 = document.getElementById("cell16");
let card17 = document.getElementById("cell17");
let card18 = document.getElementById("cell18");

cards = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
];
let cardsOpened = 0;

function createCard() {
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  console.log(numbers);
  let i = 0;
  cards.forEach((card) => {
    card.textContent = "?";
    card.dataset.number = numbers[i];
    i++;
  });
  flippedCard();
}
createCard();

function flippedCard() {
  let sameCardNumber = [];
  let sameCards = [];
  let counter = 0;
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      counter += 1;
      card.classList.add("flipped");
      card.textContent = card.dataset.number;
      sameCardNumber.push(card.dataset.number);
      sameCards.push(card);
      if (counter == 2) {
        check_Same_Card(counter, sameCardNumber, sameCards);
        counter = 0;
        sameCardNumber = [];
        sameCards = [];
      }
    });
  });
}
function do_nothing() {}

function check_Same_Card(counter, sameCardNumber, sameCards) {
  if (counter == 2) {
    if (sameCardNumber[0] == sameCardNumber[1]) {
      cardsOpened += 2;
    } else if (sameCardNumber[0] !== sameCardNumber[1]) {
      setTimeout(() => {
        reset_Cards(sameCards);
      }, 500);
    }
  }

  check_Win(cardsOpened);
}

function reset_Cards(sameCards) {
  sameCards.forEach((card) => {
    card.textContent = "?";
    card.classList.remove("flipped");
  });
}

function check_Win(cardsOpened) {
  if (cardsOpened == cards.length) {
    alert("You win this game");
  }
}
