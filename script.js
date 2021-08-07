let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let messageEl = document.querySelector('#message-el');

let isAlive = false;
let hasBlackjack = false;

let cards = [];
let sum = 0;
let message = '';

function startGame() {
    isAlive = true;
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cards = [card1, card2];
    sum = card1 + card2;
    refresh();
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber
    }
}

function refresh() {
    cardsEl.textContent = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - ";
    }

    sumEl.textContent = 'sum: ' + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got blackJack!!";
        hasBlackjack = true;
    } else {
        message = "Sorry you're out!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        refresh()
    }
}