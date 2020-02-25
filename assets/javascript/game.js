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
  return Math.floor(Math.random() * (1, 12 + 1));
}

function getRandomNumber() {
    return Math.floor(Math.random() * (12, 120 + 1) + 12);
  }

$("#random-number").text(getRandomNumber());

// crystal click = adds points to player score
// update player score counter with each click
// player must match their score to random number to win
// player loses if score goes above random number
$(".crystal-options").on("click", "img", function() {
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
  if (crystalTotal === getRandomNumber()) {
    Wins = Wins + 1;
    $("#wins").text(Wins);
    // function to reset game
  }

  if (crystalTotal > getRandomNumber()) {
    Losses = Losses + 1;
    $("#losses").text(Losses);
  }
});


// game resets at win or loss
// random values refreshed when game is reset
// do not refresh page to restart game
