//Grab the HTML elements
let headerEl = document.getElementById("header-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let startBtn = document.getElementById("start-btn")
let newCardBtn = document.getElementById("new-card-btn")

//Card game Elements
let firstCard = 5
let secondCard = 8
let cards = [firstCard, secondCard]

//game logic
let isFinallyAlive = true
let hasBlackJack = false
let hearConvo = false

function renderGame(){
    startGame()
}
function startGame(){
//when button is clicked. print card numbers & the sum they produce
//determine you lose or win
//change text to show winning 
cardEl.textContent = "Your Card: " + cards 
cardsSum = cards[0] + cards[1]
sumEl.textContent = "Your Sum: " + cardsSum

if (cardsSum <= 20){
    headerEl.textContent = "Draw a new card, take your time though"
    hearConvo = true
}
else if (cardsSum == 21){
    headerEl.textContent = "You've got Blackjack. Here's a free burger, heheheh."
    hasBlackJack = true
}
else {
headerEl.textContent = "Well, sucks for you."
isFinallyAlive = false
}

}
function newCard() {
//draw a new card by pushing a card into the deck
//then add this card into the sum
let newCardDrawn = 2
cards.push(newCardDrawn)
sumEl.textContent = "Your Sum: " + (cardsSum + newCardDrawn)
console.log(cards)
}
