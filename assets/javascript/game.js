$(document).ready(function() {});
// four crystals with random hidden value between 1-12
var crystals = ["red", "yellow", "purple", "heart"];
var crystal1 = crystalNumber();
var crystal2 = crystalNumber();
var crystal3 = crystalNumber();
var crystal4 = crystalNumber();
var crystalTotal = 0;
var Wins = 0;
var Losses = 0;

function crystalNumber() {
  // return Math.floor(Math.random() * (1, 12 + 1));
  return Math.floor(Math.random() * 12) + 1;

}

function getRandomNumber() {
  return Math.floor(Math.random() * 102)  + 19;


  // return Math.floor(Math.random() * (19, 120+ 1));
  }

  var targetScore = getRandomNumber();
$("#random-number").text(targetScore);

// crystal click = adds points to player score
// update player score counter with each click
// player must match their score to random number to win
// player loses if score goes above random number
$("#crystal-options").on("click", "img", function() {
  var clickedCrystal = $(this).attr("id");

  if (clickedCrystal === "red") {
    crystalTotal = crystalTotal + crystal1;
  } else if (clickedCrystal === "heart") {
    crystalTotal = crystalTotal + crystal2;
  } else if (clickedCrystal === "yellow") {
    crystalTotal = crystalTotal + crystal3;
  } else if (clickedCrystal === "purple") {
    crystalTotal = crystalTotal + crystal4;
  }
  console.log(crystalTotal);
  $("#score").text(crystalTotal);

  // track total wins/losses
  if (crystalTotal === targetScore) {
    Wins = Wins + 1;
    $("#wins").text(Wins);
    resetGame()
  }

  if (crystalTotal > targetScore) {
    Losses = Losses + 1;
    $("#losses").text(Losses);
  resetGame()
  }

});

function resetGame() {
  crystalTotal = 0
  $("#score").text(crystalTotal);  // reset target
  $("#random-number").text(getRandomNumber());
   crystal1 = crystalNumber();
   crystal2 = crystalNumber();
   crystal3 = crystalNumber();
   crystal4 = crystalNumber();}
// game resets at win or loss
// random values refreshed when game is reset
// do not refresh page to restart game
