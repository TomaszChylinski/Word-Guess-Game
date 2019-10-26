
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
    "ghost",
    "scary",
    "dog",
    "funny",
    "master",
    "light",
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

  //random word gets choosen from arrary
  var cpuWordChoice =
    cpuGuestWords[Math.floor(Math.random() * cpuGuestWords.length)];
  console.log(cpuWordChoice);

  var lettersUsed =   document.getElementById("userInput");
//capture clicked letter and store it 
  document.onkeyup = function (event) {
  lettersUsed.textContent = event.key;


  console.log(lettersUsed);
};









  /*guesses inside buttons
  for (var i = 0; i < cpuWordChoice.length; i++) {
    var letterBtn = $("<button>");

    letterBtn.addClass("letter-button letter letter-button-color");

    letterBtn.attr("data-letter", cpuWordChoice[i]);

    letterBtn.text(cpuWordChoice[i]);

    $("#buttons").append(letterBtn);
  }

  /*notes
   */

  //onKeyUp function to start the game
  //also stores the letters that have been clicked by the user
  //var userText = document.getElementById("userInput");
  var keysPressed = [];

  /*
document.onkeyup = function(event) {
  userText.textContent = event.key;
 // keysPressed.push(userText);
  //keysPressed.userText = "";
  console.log("buttonClicked " + userText);
  //console.log("button Clicked arrary " + keysPressed);
};

*/

  // Next, we give JavaScript a function to execute when onkeyup event fires.

