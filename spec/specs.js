describe('scrabble', function() {
  it('returns score for the sum of letters in word', function() {
    scrabble('cat').should.equal(5);
  });

  it('returns score for the sum of letters in word regardless of case', function() {
    scrabble('Mississippi').should.equal(17);
  });

  it('returns an error if a character other than a letter is entered', function() {
    scrabble('HappyBirthday!').should.equal("Error: please enter letters only");
  });
});

