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
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var currentWord = "";
var answerArrary = [];
var userInput;
var incorrectLetter = [];
var correctLetters = 0;


$(document).ready(function () {

  //Initial Load

  document.getElementById("guessesLeft").textContent = guessesLeft;
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  //////////////////////////////////////////////////////////////////////
  
  //pick random word
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(currentWord);

  for (var i = 0; i < currentWord.length; i++) {
    answerArrary.push(" __ ");
    document.getElementById("currentWord").textContent = answerArrary.join(" ");
  }
})


// start of a new game 
function reset() {
  currentWord = "";
  answerArrary = [];
  userInput = "";
  incorrectLetter = [];
  guessesLeft = 10;
  correctLetters = 0;
  document.getElementById("guessesLeft").textContent = guessesLeft;

  //get new word
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(currentWord);

  for (var i = 0; i < currentWord.length; i++) {
    answerArrary.push(" __ ");
    document.getElementById("currentWord").textContent = answerArrary.join(
      " "
    );
  }
}


document.onkeyup = function (event) {

  // keyCode is just a number 
  if (event.keyCode > 64 && event.keyCode < 91) {
    userInput = event.key;

    if (currentWord.indexOf(userInput) > -1) {
      for (var i = 0; i < currentWord.length; i++) {
        //if true than replace underscore with userInput
        if (currentWord[i] === userInput) {
          answerArrary[i] = userInput;
          document.getElementById("currentWord").textContent = answerArrary;
          correctLetters++;
          console.log("show correct letters", correctLetters)
          console.log("show  answerArrary", answerArrary.length)
          if (correctLetters == answerArrary.length) {
            winner();
          }
        }
      }
    } else {
      incorrectLetter.push(userInput);
      guessesLeft--;
      document.getElementById("guessesLeft").textContent = guessesLeft;
      if (guessesLeft == 0) {
        loser();
      }
    }
  } else {
    alert("Sorry, please select a letter")
  }
}


function loser() {
  alert("Sorry You Lost, Try Again!")
  losses++;
  document.getElementById("losses").textContent = losses;
  reset();
};

function winner() {
  alert("Congrats You Won! You spelled " + currentWord + " Correctly")
  wins++;
  document.getElementById("wins").textContent = wins;
  reset()
};