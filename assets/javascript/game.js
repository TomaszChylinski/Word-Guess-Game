//declaring variables
var remainingGuesses = 10;
var wins = 0;
var losses = 0;
var rand;
var cpuWordChoice;
var answerArrary = [];
var wrongLetter = [];

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
  }

  document.getElementById("currentWord").textContent = answerArrary.join(" ");
}

//decide if user has won or lost
function winLose() {
  if (winCounter === cpuWordChoice.length) {
    alert("Winner");
  }
}

function loseGame() {
  if (remainingGuesses < 1) {
    document.getElementById("lost").textContent = losses++;
    alert("Sorry You Lost");
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
        document.getElementById("currentWord").textContent = answerArrary;
        console.log("testing if underscore gets replaced " + answerArrary);
        winLose();
      }
    }
  } else {
    wrongLetter.push(userInput);

    document.getElementById(
      "remainingGuesses"
    ).textContent = remainingGuesses--;
    console.log(wrongLetter);
    document.getElementById("lettersUsed").textContent = wrongLetter;
  }
};

startGame();
