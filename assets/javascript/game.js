var remainingGuesses = 10;
var wins = 0;
var loses = 0;

var userText = document.getElementById("lettersUsed");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  userText.textContent = event.key;
  console.log(userText.textContent);
};

//aplphabet arrary
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// an arrary of words for the cpu to chose from
var cpuGuestWords = [
  "soccer",
  "wonderful",
  "tinkle",
  "haberdasher",
  "basketball",
  "finance",
  "purple",
  "equivalent",
  "interstellar"
];

function startGame() {
  //pick random word
  var cpuWordChoice =
    cpuGuestWords[Math.floor(Math.random() * cpuGuestWords.length)];


    var answerArrary = [];
    for (var i = 0; i < cpuWordChoice.length; i++) {
      answerArrary.push(' __ ');
    }

    document.getElementById("trysLeft").textContent = answerArrary

  }

startGame();
