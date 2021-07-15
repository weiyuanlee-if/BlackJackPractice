//Grab the HTML elements
let headerEl = document.getElementById("header-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let startBtn = document.getElementById("start-btn")
let newCardBtn = document.getElementById("new-card-btn")

//Card game Elements

let cards = []
let cardSum = 0

//game logic
let isAlive = false
let hasBlackJack = false

let player = {
    name: "You",
    chips: 145 
}
let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
let randomNumber = Math.floor(Math.random() * 13) + 1
if(randomNumber > 10){
    return 10
} else if (randomNumber === 1) {
    return 11
} else {
    return randomNumber
}
}

function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    cardSum = firstCard + secondCard

    renderGame()
}
function renderGame(){
cardEl.textContent = "Your Cards: " 
for(let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
}
sumEl.textContent = "Your Sum: " + cardSum

if (cardSum <= 20){
    headerEl.textContent = "Draw a new card, take your time though"
    
}
else if (cardSum === 21){
    headerEl.textContent = "You've got Blackjack. Here's a free burger, heheheh."
    hasBlackJack = true
}
else {
headerEl.textContent = "Well, sucks for you."
isAlive = false

}

}
function newCard() {
//draw a new card by pushing a card into the deck
//then add this card into the sum
if( isAlive === true && hasBlackJack === false) {
    let newCardDrawn =  getRandomCard()
    cardSum += newCardDrawn
    cards.push(newCardDrawn)
    renderGame()
}

} 
