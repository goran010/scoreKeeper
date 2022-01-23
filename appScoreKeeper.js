const p1 = {
    FirstPlayerBtn: document.querySelector(".addFirstPlayer"),
    scoreDisplay: document.querySelector(".firstScore"),
    Score: 1,
    player: 1,
    winner: false
}
const p2 = {
    SecondPlayerBtn: document.querySelector(".addSecondPlayer"),
    scoreDisplay: document.querySelector(".secondScore"),
    Score: 1,
    player: 2,
    winner: false
}

const reset = document.querySelector(".reset")
const input = document.querySelector(".input")
let maxI = 5;

function updateScores(object) {
    if (object.Score < maxI + 1 && p2.winner == false && p1.winner == false) {
        object.scoreDisplay.innerHTML = `${object.Score++}`;;
    }
    if (object.Score === maxI + 1 && p2.winner == false && p1.winner == false) {
        object.winner = true;
        toggleClass(object)
        p1.FirstPlayerBtn.classList.toggle("inactive")
        p2.SecondPlayerBtn.classList.toggle("inactive")
    }
}
function toggleClass(object) {
    if (object.player == 1) {
        p2.scoreDisplay.classList.toggle("red")
        p1.scoreDisplay.classList.toggle("green")
    }
    else {
        p1.scoreDisplay.classList.toggle("red")
        p2.scoreDisplay.classList.toggle("green")
    }
}

input.addEventListener("input", () => {
    maxI = parseInt(input.value);
})
p1.FirstPlayerBtn.addEventListener("click", () => {
    updateScores(p1)
})
p2.SecondPlayerBtn.addEventListener("click", () => {
    updateScores(p2)
})
reset.addEventListener("click", () => {
    p1.scoreDisplay.innerHTML = 0;
    p2.scoreDisplay.innerHTML = 0;
    if (p1.winner === true) {
        toggleClass(p1)
        p1.FirstPlayerBtn.classList.toggle("inactive")
        p2.SecondPlayerBtn.classList.toggle("inactive")
    }
    if (p2.winner === true) {
        toggleClass(p2)
        p1.FirstPlayerBtn.classList.toggle("inactive")
        p2.SecondPlayerBtn.classList.toggle("inactive")
    }
    p1.winner = false;
    p2.winner = false;
    p1.Score = 0
    p2.Score = 0
}) 