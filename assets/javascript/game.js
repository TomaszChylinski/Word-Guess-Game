//declaring variables
var remainingGuesses = 10;
var wins;
var losses;
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
  //print out remainig guesses

  document.getElementById("remainingGuesses").textContent = remainingGuesses;

  //pick random word
  cpuWordChoice =
    cpuGuestWords[Math.floor(Math.random() * cpuGuestWords.length)];
  console.log(cpuWordChoice);

  //create underscores for placeholders
  for (var i = 0; i < cpuWordChoice.length; i++) {
    answerArrary.push(" __ ");
  }

  document.getElementById("trysLeft").textContent = answerArrary.join(" ");
}

//store key event upon onkeyup
document.onkeyup = function(event) {
  userInput = event.key;

  //checking if letter exisits in cpuWordChoice word
  if (cpuWordChoice.indexOf(userInput) > -1) {
    for (var i = 0; i < cpuWordChoice.length; i++) {
      if(cpuWordChoice[i] === userInput){
        answerArrary[i] = userInput;
        console.log('testing if underscore gets replaced ' + answerArrary)
      }
    }
  } else {
    wrongLetter.push(userInput);
    //document.getElementById("wrongLetters").textContent = wrongLetter;
    remainingGuesses--;
  }
};

startGame();
