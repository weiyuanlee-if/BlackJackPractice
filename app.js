//Grab the HTML elements
let headerEl = document.querySelector(".header-el")
let startBtn = document.querySelector(".start-btn")
let newCardBtn = document.querySelector(".new-card-btn")

let plCardEl = document.querySelector(".plcard-el")
let plSumEl = document.querySelector(".plsum-el")

let dealerCardEl = document.querySelector(".dealercard")
let dealerSumEl = document.querySelector(".dealersum")



//array of cards that will be filled. A deck of sorts
let plcards = []
let dlcards = [ ]
//with every card pulled, they are added together and put into this sum container
let plcardSum = 0
let dealdercardSum = 0

//game logic
//Blackjack rules. Is alove means you can still pull cards, if you hit 21 you get blackjack. They are false at the start of game
let isAlive = false
let hasBlackJack = false
//an object containing player attributes such as name and the amount of money you. 
//TODO: give the choice for a player to input their name
let player = {
    name: "You",
    chips: 100
}
//this holds and prints your chips into the html 
//TODO: function to make the chips decrease or increase
let playerChips = document.querySelector(".player-chips")
playerChips.textContent = player.name + ": $" + player.chips

//function where random cards are given to you by the dealer and pulled out by the dealer
function getPlayerRandomCard() {
let plrandomNumber = Math.floor(Math.random() * 13) + 1
if(plrandomNumber > 10){
    return 10
} else if (plrandomNumber === 1) {
    return 11
} else {
    return plrandomNumber
}
}
function getDealerRandomCard() {
    let dlrandomNumber = Math.floor(Math.random() * 13) + 1
if(dlrandomNumber > 10){
    return 10
} else if (dlrandomNumber === 1) {
    return 11
} else {
    return dlrandomNumber
}
}


//when you press the start button, it initializes variables and randomized cards and variables that will hold produced random cards and print them in the html and add them. After producing these containers for the game, it renders the game.
function startGame(){
    
    isAlive = true
    let plfirstCard = getPlayerRandomCard()
    let plsecondCard = getPlayerRandomCard()

    let dlfirstCard = getDealerRandomCard()
    let dlsecondCard = getDealerRandomCard()

    plcards = [plfirstCard, plsecondCard]
    dlcards = [dlfirstCard, dlsecondCard]
    plcardSum = plfirstCard + plsecondCard
    dealercardSum = dlfirstCard + dlsecondCard
    renderGame()
}
//here is where the main rules of the game exists. your player card element and sum el is initialized, with the rendering of the game, a loop picks through your array of randomized numbers and prints it on to the screen and then your two cards are added together and printed.  then conditionals determine if youre sum is lower than or higher than or equal to 21 to determine if you earned blackjack.
function renderGame(){
plCardEl.textContent = "Your Cards: " 
for(let i = 0; i < plcards.length; i++) {
    plCardEl.textContent += plcards[i] + " "
}
plSumEl.textContent = "Your Sum: " + plcardSum


dealerCardEl.textContent = "Dealer Cards: " 
for(let i = 0; i < dlcards.length; i++) {
    dealerCardEl.textContent += dlcards[i] + " "
}
dealerSumEl.textContent = "Dealer Sum: " + dealercardSum

if (plcardSum <= 20){
    headerEl.textContent = "Draw a new card"
    
}
else if (plcardSum === 21){
    headerEl.textContent = "You've got Blackjack."
    hasBlackJack = true
}
else {
headerEl.textContent = "Bust, sucks for you."
isAlive = false
}
}
//grants a new card thats pushed into the deck and added to the card sum
function newCard() {
//draw a new card by pushing a card into the deck
//then add this card into the sum
if( isAlive === true && hasBlackJack === false) {
    let newPlCardDrawn = getPlayerRandomCard()
    let newDlCardDrawn = getDealerRandomCard()
    plcardSum += newPlCardDrawn
    dealercardSum += newDlCardDrawn
    plcards.push(newPlCardDrawn)
    dlcards.push(newDlCardDrawn)
  
    renderGame()
}
}

function restartGame() {
    if (chips === 0) {

        headerEl.textContent = "Restart Game?"
        let rsrtBtn = document.createElement("BUTTON")
        
    }
    else {
        startGame()
    }
}
//every time you win blackjack the game restarts and depletes your money
function betGame() {
if(hasBlackJack === true && chips > 0) {
    chips -= 10
}
else {
    restartGame()
}
}
//TODO: You need to render the side of the dealer and make a function where the dealer loses. you also need to make a function where you can bet money, and keep playing until you run out of money and have to restart the game. Which you need to code something where bet depletes your money and the cards restart. when you win you gain more money. which allows more games to be player.

//TODO: a bug i notice is that if you hit new card after you win blackjack, you break the new card button