const expect = require('chai').expect;
const canVote = require('../src/can-vote').canVote;
const getVoters = require('../src/can-vote').getVoters;

//To run the tests, please do 
// npm install 
// first. Then run 
// npm test.

//A test marked xit is ignored. Only change one test at a time from
//xit to it. Then write minimum code in the file under src to make the
//test to pass. Once a test passes, leave it as it and change the next xit to 
//it. Continue until all tests are passing.

describe('can vote tests', function() {
  xit('should return true for an adult', function() {
    expect(canVote('Jill', 20)).to.be.true;
  });

  xit('should return false for a child', function() {
    expect(canVote('Jake', 12)).to.be.false;
  });

  xit('should return true for just turned 18', function() {
    expect(canVote('Greg', 18)).to.be.true;
  });

  xit('should return false for invalid age', function() {
    expect(canVote('Dennis', "@28")).to.be.false;
  });

  xit('should return false for invalid type', function() {
    expect(canVote('Sara', "18")).to.be.false;
  });
  
  xit('should return no voters', function() {
    const folks = [
      ['Paul', 10],
      ['Paula', 12],
      ['Sam', 15]
    ];
    expect(getVoters(folks)).to.be.eql([]);
  });

  xit('should return one voter', function() {
    const folks = [
      ['Paul', 10],
      ['Paula', 22],
      ['Sam', 15]
    ];
    expect(getVoters(folks)).to.be.eql(['Paula']);
  });

  xit('should return two voter', function() {
    const folks = [
      ['Paul', "10"],
      ['Paula', 22],
      ['Sam', 25]
    ];
    expect(getVoters(folks)).to.be.eql(['Paula', 'Sam']);
  });
});
