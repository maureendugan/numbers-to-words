var numbersToWord = function(number) {
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
  } else if (number < 100) {
    result = tys[number.toString().charAt(0) + "0"] + " " + ones[number.toString().charAt(1)];;
  } else if (number % 100 < 10) {
    result = ones[number.toString().charAt(0)] + " hundred " + ones[number.toString().charAt(2)];;
  }

  return result;
};
