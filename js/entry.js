function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numWords = function() {
  var bodyText = this.body.split(" ");
  var result = bodyText.length;
  return result;
};

Entry.prototype.numVowels = function(returnVowels) {
  var vowelList = ["a", "e", "i", "o", "u"];
  var vowels = 0;
  var consonants = 0;
  var entryLetters = this.body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() \s]/g,"").split("");
  for (i=0; i<entryLetters.length; i++) {
    if (vowelList.includes(entryLetters[i])) {
      vowels++;
    } else {
      consonants++;
    }
  }
  if (returnVowels) {
    return vowels;
  } else {
    return consonants;
  }
};
