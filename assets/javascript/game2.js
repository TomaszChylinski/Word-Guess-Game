var guessesLeft = 10;
var wins = 0;
var losses = 0;
var wordBank = [
  "soccer",
  "wonderful",
  "tinkle",
  "light",
  "basketball",
  "finance",
  "purple",
  "inner",
  "space",
  "moon",
  "mars",
  "color",
  "game"
];
var currentWord = "";
var answerArrary = [];
var userInput;
var incorrectLetter = [];
var correctLetters = 0;

document.getElementById("guessesLeft").textContent = guessesLeft;
document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;

$(document).ready(function() {
  //pick random word
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(currentWord);

  for (var i = 0; i < currentWord.length; i++) {
    answerArrary.push(" __ ");
    document.getElementById("currentWord").textContent = answerArrary.join(" ");
  }

  function reset() {
    currentWord = "";
    answerArrary = [];
    userInput;
    incorrectLetter = [];
    guessesLeft = 10;
    correctLetters = 0;
    //document.getElementById("guessesLeft").textContent = 10;

    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);

    for (var i = 0; i < currentWord.length; i++) {
      answerArrary.push(" __ ");
      document.getElementById("currentWord").textContent = answerArrary.join(
        " "
      );
    }
  }

  document.onkeyup = function(event) {
    //var charCode = event.keyCode;

      userInput = event.key;
      //checking if letter exisits in currentWord word
      if (currentWord.indexOf(userInput) > -1) {
        for (var i = 0; i < currentWord.length; i++) {
          //if true than replace underscore with userInput
          if (currentWord[i] === userInput) {
            answerArrary[i] = userInput;
            document.getElementById("currentWord").textContent = answerArrary;
            correctLetters++;
            winner();
            // console.log("testing if underscore gets replaced " + answerArrary);
          }
        }
      } else {
        incorrectLetter.push(userInput);
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        loser();
        document.getElementById(
          "incorrectLetter"
        ).textContent = incorrectLetter;
      }
    
  };




  function loser() {
    if (guessesLeft === 0) {
      losses++;
      document.getElementById("losses").textContent = losses;
      reset()
    }
  }

  

  function winner() {
    if (correctLetters === answerArrary.length) {
      wins++;
      document.getElementById("wins").textContent = wins;
      reset()
    }
  }
});
