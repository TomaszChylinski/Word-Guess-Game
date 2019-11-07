//declaring variables

var rand;
var cpuWordChoice;
var answerArrary = [];
var wrongLetter = [];
var winCounter = 0;
var losses = 0;
var wins = 0;
var remainingGuesses = 10;

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
  "inner",
  "space",
  "moon",
  "mars",
  "color",
  "game"
];

function startGame() {
  cpuChooseWord();
  remainingGuesses = 10;
  //printing my variables onto the screen
  document.getElementById("remainingGuesses").textContent = remainingGuesses;
  document.getElementById("lost").textContent = losses;
  document.getElementById("win").textContent = wins;

  //create underscores for placeholders

  function cpuChooseWord() {
    //pick random word
    cpuWordChoice =
      cpuGuestWords[Math.floor(Math.random() * cpuGuestWords.length)];
    console.log(cpuWordChoice);
    for (var i = 0; i < cpuWordChoice.length; i++) {
      answerArrary.push(" __ ");
      document.getElementById("currentWord").textContent = answerArrary.join(
        " "
      );
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
        //console.log(wrongLetter);
        document.getElementById("lettersUsed").textContent = wrongLetter;
      }
    }


  //alert if user won or lost
  function loser() {
    if (remainingGuesses === 0) {
      losses++;
      document.getElementById("remainingGuesses").textContent = 10;
      cpuChooseWord();
    }
  }



  }


startGame();
