describe('getLetterValue', function() {
  it('returns a score of one for the letter a', function() {
    getLetterValue('a').should.equal(1);
  });

  it('returns 2 for the letter g', function() {
    getLetterValue('g').should.equal(2);
  });

  it('returns 3 for the letter b', function() {
    getLetterValue('b').should.equal(3);
  });

  it('returns 4 for the letter v', function() {
    getLetterValue('v').should.equal(4);
  });

  it('returns 5 for the letter k', function() {
    getLetterValue('k').should.equal(5);
  });

  it('returns 8 for the letter x', function() {
    getLetterValue('x').should.equal(8);
  });

  it('returns 10 for the letter z', function() {
    getLetterValue('z').should.equal(10);
  });
});

