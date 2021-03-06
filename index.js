let player = {
    name: "Sean",
    chips: 20
}

let cards = []
let sum = 0
let betSum = 0
let betTotal = 20
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let betEl = document.getElementById("bet-el")
let betBtn = document.getElementById("bet-btn")

playerEl.textContent = player.name + ": $" + player.chips

if (betSum === 0) {
    betBtn.disabled = true
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

document.getElementById("start-btn").addEventListener("click", () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    betSum = 5
    betTotal -= 5
    betBtn.disabled = false
    renderGame()
})


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    betEl.textContent = "Bet: $" + betSum

    playerEl.textContent = player.name + ": $" + betTotal

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

document.getElementById("new-card-btn").addEventListener("click", () => {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
})

betBtn.addEventListener("click", () => {
    if (betTotal !== 0) {
        betSum += 5
        betEl.textContent = "Bet: $" + betSum
        betTotal -= 5
        playerEl.textContent = player.name + ": $" + betTotal
    } else {
        playerEl.textContent = "Maxed Out"
    }
})


/*  TO DO:
    add money if win 
    subtract money if lose
 */
