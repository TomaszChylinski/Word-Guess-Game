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


//pick random words from cpuGuestWords
var cpuWordChoice =
  cpuGuestWords[Math.floor(Math.random() * cpuGuestWords.length)];
console.log(cpuWordChoice);


//answer arrary, shows how many letters in cpuWordChoice
var answerArrary = [];
for (var i = 0; i < cpuWordChoice.length; i++){
  answerArrary[i] = "_";
}







var lettersUsed = document.getElementById("userInput");

document.onkeyup = function(event) {
  lettersUsed.textContent = event.key;
  console.log(lettersUsed);
};





