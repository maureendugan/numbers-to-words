var getLetterValue = function(letter) {
  var valueOneLetters = ['a', 'e', 'i', 'o', 'u' , 'l' , 'n' , 'r', 's', 't'];
  var valueTwoLetters = ['d','g'];
  var valueThreeLetters = ['b','c', 'm', 'p']; 
  var valueFourLetters = ['f', 'h','v', 'w', 'y']; 
  var valueEightLetters = ['j', 'x'];
  var valueTenLetters = ['q', 'z'];
  var result;

  if (letter === 'k') {
    return 5;
  } else if (valueOneLetters.indexOf(letter) >= 0) {
    return 1;
  } else if (valueTwoLetters.indexOf(letter) >= 0) {
    return 2;
  } else if (valueThreeLetters.indexOf(letter) >= 0){
    return 3;
  } else if (valueFourLetters.indexOf(letter) >=0){
    return 4;
  } else if (valueEightLetters.indexOf(letter) >=0){
    return 8;
  } else if (valueTenLetters.indexOf(letter) >=0){
    return 10;
  }
};  

var scrabble = function(word) {
  var word = word.toLowerCase().split('');
  var score = 0;
  var alphabet = {a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};

  for (var i = 0; i < word.length; i ++) {
    score += getLetterValue(word[i]);
  }
  if (score > 0){
    return score;
  } else {
    return "Error: please enter letters only";
  }
};
