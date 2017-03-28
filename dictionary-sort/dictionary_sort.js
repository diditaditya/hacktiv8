const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> "
});

rl.prompt();
console.log("Type a word:");

rl.on("line", (userInput) => {
  Dictionary(userInput);
  rl.prompt();
});

var wordList = [];

var Dictionary = (word) => {
  if (word.length > 0) {
    if (inputCheck(word)) {
      wordList.push(word);
      console.log("Type another word or press enter to finish");
      rl.prompt();
    }
  } else {
    var count = wordList.length;
    console.log("Congratulation! Your dictionary has " + count + " words!");
    wordList.sort(function(a, b) {
      return (a.toLowerCase()).localeCompare(b.toLowerCase());
    });
    for (var i in wordList) {
      console.log(wordList[i]);
    }
    process.exit();
  }
}

var inputCheck = (word) => {
  var pattern = /^[a-z]+$/i;
  if (!pattern.test(word)) {
    console.log("That's not a word.");
    console.log("Type a word:");
    return false;
  } else {
    return true;
  }
}


module.exports = Dictionary
