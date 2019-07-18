const expect = require('chai').expect;
const longestName = require('../src/people').longestName;
const namesThatStartWith = require('../src/people').namesThatStartWith;
const greet = require('../src/people').greet;
const greetWith = require('../src/people').greetWith;

describe('people tests', function() {
  xit('should return undefined for person with longest name', function() {
    expect(longestName()).to.be.eql(undefined);
  });

  xit('should return the given name for person with longest name', function() {
    expect(longestName('Jake')).to.be.eql('Jake');
  });

  xit('should return the first name for person with longest name', function() {
    expect(longestName('Santa', 'Jake')).to.be.eql('Santa');
  });

  xit('should return the last name for person with longest name', function() {
    expect(longestName('Mike', 'Nancy')).to.be.eql('Nancy');
  });
  
  xit('should return an empty list for names that start with S, given no names', function() {                                                                            
    expect(namesThatStartWith('S')).to.be.eql([]);
  });

  xit('should return an empty list for names that start with S given one name', function() {                                                                            
    expect(namesThatStartWith('S', 'Nate')).to.be.eql([]);
  });

  xit('should return the name in list for names that start with S given one matching name', function() {                                                                            
    expect(namesThatStartWith('S', 'Sara')).to.be.eql(['Sara']);
  });
      
  xit('should return two name in list for names that start with S', function() {                                                                            
    expect(namesThatStartWith(
      'S', 'Nate', 'Sam', 'Heather', 'Sara')).to.be.eql(['Sam', 'Sara']);
  });                                                           
  
  xit('should greet Sara', function() {
    expect(greet('Hello', 'Sara')).to.be.eql("Hello Sara, how're you?");
  });

  xit('should greet Peter', function() {
    expect(greet('Hi', 'Peter')).to.be.eql("Hi Peter, how're you?");
  });

  xit('should return a function that says hello', function() {
    const greetHi = greetWith('Hi');
    expect(greetHi('Bob')).to.be.eql("Hi Bob, how're you?");
  });

  xit('should return a function that says howdy', function() {
    const greetHowdy = greetWith('Howdy');
    expect(greetHowdy('Jane')).to.be.eql("Howdy Jane, how're you?");
  });
});
