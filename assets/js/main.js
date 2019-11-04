// $(document).ready(function() {
var randomScore;
var playerScore;
var wins = 0;
var loses = 0;
var jewelsScores = [0, 0, 0, 0];

function newGame() {
  //   Get new score to guess
  randomScore = randomNumber(30);
  playerScore = 0;
  // Get jewels scores
  for (var i = 0; i < jewelsScores.length; i++) {
    jewelsScores[i] = randomNumber(1);
  }
  // Update UI
  $("#yourScore").text(playerScore);
  $("#numberToGuess").text(randomScore);
}

function randomNumber(min) {
  var randomNum = Math.floor(Math.random() * 20) + min;
  return randomNum;
}

function didYouWin() {
  if (playerScore === randomScore) {
    wins += 1;
    $("#wins").text(wins);
    newGame();
  } else if (playerScore > randomScore) {
    loses += 1;
    $("#loses").text(loses);
    newGame();
  }
}

$(".jewel-1").on("click", function() {
  playerScore += jewelsScores[0];
  $("#yourScore").text(playerScore);
  didYouWin();
});
$(".jewel-2").on("click", function() {
  playerScore += jewelsScores[1];
  $("#yourScore").text(playerScore);
  didYouWin();
});
$(".jewel-3").on("click", function() {
  playerScore += jewelsScores[2];
  $("#yourScore").text(playerScore);
  didYouWin();
});
$(".jewel-4").on("click", function() {
  playerScore += jewelsScores[3];
  $("#yourScore").text(playerScore);
  didYouWin();
});

newGame();
// });
