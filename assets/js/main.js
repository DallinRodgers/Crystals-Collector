$(document).ready(function() {
  var randomScore;
  var playerScore;
  var wins;
  var loses;
  var jewelScore;

  function newGame() {
    //   Get new score to guess
    randomScore = randomNumber(30);
    // Get jewels scores

    // Update UI
    $("#numberToGuess").text(randomScore);
  }

  function randomNumber(min) {
    var randomNum = Math.floor(Math.random() * 20) + min;
    return randomNum;
  }

  newGame();
});
