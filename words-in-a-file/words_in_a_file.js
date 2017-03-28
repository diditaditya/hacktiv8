var sys = require('sys');
const fs = require('fs');


// actual conversion code starts here
function words_in_a_file(filename, limit) {
  var content = fs.readFileSync(filename).toString().toLowerCase();
  var words = content.match(/[a-z]+/ig);
  var wordSet = new Set(words);

  var ignore = ["the", "a", "and", "of", "in", "to", "at", "on", "but", "is", "as"];

  for (var i in ignore) {
    wordSet.delete(ignore[i]);
  }

  var keyList = [];
  wordSet.forEach((word) => {
    var key = word.toLowerCase();
    keyList.push(key);
  });
  var wordCount = [];
  for (var i = 0; i < keyList.length; i++) {
    var count = 0;
    for (var j = 0; j < words.length; j++) {
      if (keyList[i] === words[j].toLowerCase()) {
        count += 1;
      }
    }
    wordCount.push([keyList[i],count]);
  }

  wordCount.sort(function(a, b) {
    return b[1] - a[1];
  });

  for (var i = 0; i < limit; i++) {
    console.log(wordCount[i][0] + " : " + wordCount[i][1]);
  }

}

words_in_a_file("source.txt", 4);

module.exports = {
  words_in_a_file: words_in_a_file
}
