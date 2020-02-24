$(document).ready(function() {

});
// four crystals with random hidden value between 1-12
var crystals = ["red", "yellow", "purple", "heart"];

// show random number at start of game between 12-120
var minNumber = 12;
var maxNumber = 120;
var randomNumber = fromRange(minNumber, maxNumber); 

function fromRange(min,max) {
    return Math.floor(Math.random()*(min,max+1)+min);
    document.getElementById("random-number").innerText = randomNumber

    console.log(randomNumber)
}
// crystal click = adds points to player score
// update player score counter with each click
// player must match their score to random number to win
// player loses if score goes above random number
// game resets at win or loss
// random values refreshed when game is reset
// track total wins/losses
// do not refresh page to restart game