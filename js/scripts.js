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
  } else {
      for (var i = 0; i < valueOneLetters.length; i++) {
        if (letter === valueOneLetters[i]) {
          return 1;
        }
      } 
      for (var i = 0; i < valueTwoLetters.length; i++) {
        if (letter === valueTwoLetters[i]) {
          return 2;
        }
      } 
      for (var i = 0; i < valueThreeLetters.length; i++) {
        if (letter === valueThreeLetters[i]) {
          return 3;
        }
      }
      for (var i = 0; i < valueFourLetters.length; i++) {
        if (letter === valueFourLetters[i]) {
          return 4;
        }
      } 
      for (var i = 0; i < valueEightLetters.length; i++) {
        if (letter === valueEightLetters[i]) {
          return 8;
        } 
      }
      for (var i = 0; i < valueTenLetters.length; i++) {
        if (letter === valueTenLetters[i]) {
          return 10;
        } 
      }
    } 
};

