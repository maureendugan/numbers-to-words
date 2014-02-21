var scrabble = function(word) {
  var word = word.toLowerCase().split('');
  var score = 0;
  var alphabet = {a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};

  word.forEach(function(letter) { 
    score += alphabet[letter];
  });
  if (score > 0){
    return score;
  } else {
    return "Error: please enter letters only";
  }
};

$(function(){
 $("form#scrabble-entry").submit(function(event){
    var word = $("input#word").val();
    var result = scrabble(word);

    $(".word").text(word);
    $(".result-word").text(result);
    
    $('#result').show();
    event.preventDefault();
 });
  
}); 
  
