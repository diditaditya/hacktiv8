"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "qwerty> "
});

rl.prompt();

rl.on("line", (userInput) => {
  pigLatin(userInput);
  rl.prompt();
});

function pigLatin(sentence) {
  // Your pig latin implementation here...

  // First iteration: convert single word
  var pigLatination = (word) => {
    var pattern = /[aiueo]/i;
    var str = word.toLowerCase();
    var pigStr = "";
    if (!pattern.test(str[0])) {
      var vowelCount = str.match(pattern);
      if (vowelCount !== null) {
        var index = str.indexOf(pattern.exec(str));
        var consonants = [];
        for (var i = 0; i < index; i++) {
          consonants.push(str[i]);
        }
        for (var i = index; i < str.length; i++ ) {
          pigStr += str[i];
        }
        for (var i = 0; i < consonants.length; i++) {
          pigStr += consonants[i];
        }
        pigStr += "ay";
        return (pigStr);
      } else {
        return (str += 'ay');
      }
    } else {
      return (str += 'ay');
    }
  }

  // Second iteratin: convert sentence
  var words = sentence.match(/\w+/ig);
  var pigified = [];
  for (var i = 0; i < words.length; i++) {
    pigified.push(pigLatination(words[i]));
  }

  console.log(pigified.join(" "));

}
