$(document).ready(function() {
  var randomScore;
  var playerScore;
  var wins;
  var loses;
  var jewelsScores = [0, 0, 0, 0];
  var gameIsPlaying;

  function newGame() {
    //   Get new score to guess
    randomScore = randomNumber(30);
    // Get jewels scores
    for (var i = 0; i < jewelsScores.length; i++) {
      jewelsScores[i] = randomNumber(0);
    }
    // console.log(jewelsScores);
    // Update UI
    $("#numberToGuess").text(randomScore);
    gameIsPlaying = true;
  }

  function randomNumber(min) {
    var randomNum = Math.floor(Math.random() * 20) + min;
    return randomNum;
  }

  $(".jewel-1").on("click", function() {
    if (gameIsPlaying) {
      console.log(jewelsScores[0]);
    }
  });
  $(".jewel-2").on("click", function() {
    console.log(jewelsScores[1]);
  });
  $(".jewel-3").on("click", function() {
    console.log(jewelsScores[2]);
  });
  $(".jewel-4").on("click", function() {
    console.log(jewelsScores[3]);
  });

  newGame();
});
