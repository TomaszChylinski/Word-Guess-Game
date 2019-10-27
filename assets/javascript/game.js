//declaring variables
var remainingGuesses = 10;
var rand;
var cpuWordChoice;
var answerArrary = [];
var wrongLetter = [];
var winCounter = 0;
var losses = 0;
var wins = 0;

// an arrary of words for the cpu to chose from
var cpuGuestWords = [
  "soccer",
  "wonderful",
  "tinkle",
  "light",
  "basketball",
  "finance",
  "purple",
  "equivalent",
  "innter",
  "space",
  "moon",
  "mars",
  "color",
  "game"
];

function startGame() {
  //printing my variables onto the screen
  document.getElementById("remainingGuesses").textContent = remainingGuesses;
  document.getElementById("lost").textContent = losses;
  document.getElementById("win").textContent = wins;

  //pick random word
  cpuWordChoice =
    cpuGuestWords[Math.floor(Math.random() * cpuGuestWords.length)];
  console.log(cpuWordChoice);

  //create underscores for placeholders
  for (var i = 0; i < cpuWordChoice.length; i++) {
    answerArrary.push(" __ ");
    document.getElementById("currentWord").textContent = answerArrary.join(" ");
  }

  //alert if user won or lost
  function winLose() {
    if (winCounter === cpuWordChoice.length) {
      document.getElementById("win").textContent = wins++;
      alert("Winner");
    } else if (remainingGuesses <= 0) {
      document.getElementById("lost").textContent = losses++;
      alert("Sorry You Lost");
      startGame();
    }
  }

  //user guesses
  document.onkeyup = function(event) {
    userInput = event.key;
    //checking if letter exisits in cpuWordChoice word
    if (cpuWordChoice.indexOf(userInput) > -1) {
      for (var i = 0; i < cpuWordChoice.length; i++) {
        //if true than replace underscore with userInput
        if (cpuWordChoice[i] === userInput) {
          answerArrary[i] = userInput;
          winCounter++;
          winLose();
          document.getElementById("currentWord").textContent = answerArrary;
          // console.log("testing if underscore gets replaced " + answerArrary);
        }
      }
    } else {
      wrongLetter.push(userInput);
      remainingGuesses--;
      document.getElementById(
        "remainingGuesses"
      ).textContent = remainingGuesses;
      winLose();
      console.log(wrongLetter);
      document.getElementById("lettersUsed").textContent = wrongLetter;
    }
  };
}

startGame();
