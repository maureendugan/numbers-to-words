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
    numbersToWord(908).should.equal('nine hundred eight');
  });

});
