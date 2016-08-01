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

Entry.prototype.getTeaser = function(){
  var bodyText = this.body.split(" ");
  var punctuation = [".", "!", "?"];
  var firstSentenceLength=8;
  for(i=0; i<8; i++)
  {
    var lastChar = bodyText[i].substr(bodyText[i].length-1);
    if(punctuation.includes(lastChar))
    {
      firstSentenceLength=i+1;
    }
  }
  var outputArray = [];
  for(i=0; i<firstSentenceLength; i++)
  {
    outputArray.push(bodyText[i]);
  }
  output=outputArray.join(" ")
  return output;
};
