describe('numbersToWord', function() {
  it('returns a word for a one digit number', function() {
    numbersToWord(5).should.equal('five');
  });
  it('returns a word for a number in the teens', function() {
    numbersToWord(11).should.equal('eleven');
  });
  it('returns a word for multiple of 10 (greater than 10)', function() {
    numbersToWord(30).should.equal('thirty');
  });
  it('returns two words for all other numbers less than 100', function() {
    numbersToWord(25).should.equal('twenty five');
  });
  it('returns a phrase for a three digit number less than 110', function() {
    numbersToWord(998).should.equal('nine hundred ninety eight');
  });
  it ('returns a phrase for number between one thousand and less that one million', function() {
    numbersToWord(364555).should.equal('three hundred sixty four thousand five hundred fifty five');
  });
  it ('returns a phrase for number between greater than one million', function() {
    numbersToWord(5364555).should.equal('five million three hundred sixty four thousand five hundred fifty five');
  });
   it ('returns a phrase for number between greater than one million', function() {
    numbersToWord(33335364555).should.equal('thirty three billion three hundred thirty five million three hundred sixty four thousand five hundred fifty five');
  });
   it ('returns a phrase for number between greater than one million', function() {
    numbersToWord(1000000).should.equal('one million');
  });

});

describe('oneToNinetyNine', function() {
  it('returns a number less than one hundred in words', function() {
    oneToNinetyNine(64).should.equal('sixty four');
  });
});
