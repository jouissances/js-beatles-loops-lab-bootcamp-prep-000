function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];  
  let count = 0;
  while (count < facts.length) {
    facts[0].concat('!!!')
  }
}
