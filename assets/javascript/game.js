//onKeyUp function to start the game

var userText = $("userInput");
onkeyup = function(keyClicked) {
  userText = keyClicked.key;
  console.log(userText);
  return userText;
};

//arrary of letters user has to chose from
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "_"
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

var cpuWordChoice =
  cpuGuestWords[Math.floor(Math.random() * cpuGuestWords.length)];
console.log(cpuWordChoice);

//print out my letters
