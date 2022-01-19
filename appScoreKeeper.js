const addFirstPlayer = document.querySelector(".addFirstPlayer")
const addSecondPlayer = document.querySelector(".addSecondPlayer")
const scoreFirstPlayer = document.querySelector(".firstScore")
const scoreSecondPlayer = document.querySelector(".secondScore")
const reset = document.querySelector(".reset")
const input = document.querySelector(".input")
let i = 1;
let j = 1;
let maxI = 5;
let win = false;

input.addEventListener("input", () => {
    maxI = parseInt(input.value);
})

addFirstPlayer.addEventListener("click", () => {
    if (i < maxI + 1 && win === false) {
        scoreFirstPlayer.innerHTML = `${i++}`;
    }
    if (i === maxI + 1 && win===false) {
        scoreFirstPlayer.classList.toggle("green")
        scoreSecondPlayer.classList.toggle("red")
        win = true;
    }
})
addSecondPlayer.addEventListener("click", () => {
    if (j < maxI + 1 && win === false) {
        scoreSecondPlayer.innerHTML = `${j++}`;
    }
    if (j === maxI + 1 && win === false) {
        scoreFirstPlayer.classList.toggle("red")
        scoreSecondPlayer.classList.toggle("green")
        win = true;
    }
})
reset.addEventListener("click", () => {
    scoreFirstPlayer.innerHTML = 0;
    scoreSecondPlayer.innerHTML = 0;
    i = 0
    j = 0
    scoreFirstPlayer.classList.toggle("green")
    scoreSecondPlayer.classList.toggle("red")
    win = false;
})