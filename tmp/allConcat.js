var Entry = require('./../js/entry.js').entryModule;

$(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);

    var numWords = entry.numWords();
    var numVowels = entry.numVowels(true);
    var numConsonants = entry.numVowels(false);
    var getTeaser = entry.getTeaser();
    $('#output').append("Title: " + entry.title + " " + "Body: " + entry.body + numWords + " " + numVowels + " " + numConsonants + " " + getTeaser)
  })
})
