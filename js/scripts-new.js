var oneToNinetyNine = function(number) {
  var ones = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' , 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
  var teens = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
  var tys = {20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};
  var result;

  if (number < 10) {
    result = ones[number];
  } else if (number < 20) {
    result = teens[number];
  } else if (number % 10 === 0) {
    result = tys[number];
  } else {
    result = tys[number.toString().charAt(0) + "0"] + " " + ones[number.toString().charAt(1)];;
  } 
  return result;
};

var numbersToWord = function(number) {
  var ones = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' , 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
  var places = {1:' hundred ', 2: ' thousand ', 3: ' million ', 4: ' billion ', 5: ' trillion '};
  var numberString = number.toString();
  var length = numberString.length;
  var place = Math.ceil((length)/3);
  var sliceHere = length - ((place-1) * 3);
  var firstNumberString = numberString.slice(0,sliceHere);
  var secondNumberString = numberString.slice(sliceHere);
  var result;

  if (number < 100) {
    result = oneToNinetyNine(number);
  } else if (number < 1000) {
    result = ones[numberString.charAt(0)] + places[place] + oneToNinetyNine(number % 100);
  } else /*if (number < 1000000)*/ {
    result = numbersToWord() + places[place]+ numbersToWord(splitAtComma[1]); 
  }
  return result;
};


