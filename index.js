function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let array2 = [];
  let j = 0;
<<<<<<< HEAD
  while (j <= facts.length - 1) {
=======
  while (j <= 3) {
>>>>>>> b991a7b27e84eb6097bf828f8d9823bd6cea4baf
    array2.push(`${facts[j]}!!!`);
    j++;
  }
  return array2;
}

let number = Math.floor(Math.random()*15);

function iLoveTheBeatles(number) {
  let array3 = [];
  do {
    array3.push(`I love the Beatles!`);
    number++;
  } while (number < 15);
<<<<<<< HEAD
  return array3;
=======
>>>>>>> b991a7b27e84eb6097bf828f8d9823bd6cea4baf
}