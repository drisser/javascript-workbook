// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand two wins!");
    });
    it('should scrub input to ensure no non-alphanumerical characters are included', () => {
      assert.equal(rockPaperScissors('rock^', ' pa*per'), "Hand two wins!");
      assert.equal(rockPaperScissors('#paper', 'scissors$'), "Hand two wins!");
      assert.equal(rockPaperScissors('r!ock', 'scissors*'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}