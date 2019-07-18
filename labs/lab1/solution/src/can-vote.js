const canVote = function(name, age) {
  return typeof age === 'number' && age > 17;  
}

const getVoters = function(folks) {
//  const voters = [];
//  
//  for(const person of folks) {
//    //if(canVote(person[0], person[1])) {
//    if(canVote(...person)) {
//      voters.push(person[0]);
//    }
//  }
//  
//  return voters;

   return folks.filter(person => canVote(...person))
     .map(person => person[0]);
}

module.exports = {
  canVote: canVote,
  getVoters: getVoters
};
