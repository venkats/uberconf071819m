const expect = require('chai').expect;
const canVote = require('../src/can-vote').canVote;
const getVoters = require('../src/can-vote').getVoters;

describe('can vote tests', function() {
  it('should return true for an adult', function() {
    expect(canVote('Jill', 20)).to.be.true;
  });

  it('should return false for a child', function() {
    expect(canVote('Jake', 12)).to.be.false;
  });

  it('should return true for just turned 18', function() {
    expect(canVote('Greg', 18)).to.be.true;
  });

  it('should return false for invalid age', function() {
    expect(canVote('Dennis', "@28")).to.be.false;
  });

  it('should return false for invalid type', function() {
    expect(canVote('Sara', "18")).to.be.false;
  });
  
  it('should return no voters', function() {
    const folks = [
      ['Paul', 10],
      ['Paula', 12],
      ['Sam', 15]
    ];
    expect(getVoters(folks)).to.be.eql([]);
  });

  it('should return one voter', function() {
    const folks = [
      ['Paul', 10],
      ['Paula', 22],
      ['Sam', 15]
    ];
    expect(getVoters(folks)).to.be.eql(['Paula']);
  });

  it('should return two voter', function() {
    const folks = [
      ['Paul', "10"],
      ['Paula', 22],
      ['Sam', 25]
    ];
    expect(getVoters(folks)).to.be.eql(['Paula', 'Sam']);
  });
});
