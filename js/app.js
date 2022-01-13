'use strict';

let userCorrect = 0;

let user = prompt('What is your name?');
alert(`Welcome ${user} to my About Me page!`);
alert(`${user} ! lets see how much you know about me \n Answer the following questions with a yes or a no`);
let correct = (`Thats correct ${user}! `);
let noDirections = 'Come on now, read the instructions \n answer yes or no!';
let florida = 'I lived in Florida for almost a decade!';
let nope = (`Sorry thats wrong ${user}! `);
let cheese =  'I was!! I pasteurized milk and everything!';
let ucf = 'I went to the University of Central Florida \n UCF UCF UCF UCF UCF!';
let scuba = 'I hate going deep under water! I was an electrician!';
let wife = 'I am married to my wonderful wife!';

let answerOne = prompt('Did I live in Florida?').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y') {
  //console.log(`${correct} ${florida}`);
  userCorrect++;
  alert(`${correct} ${florida}`);
}else if(answerOne === 'no' || answerOne === 'n'){
  //console.log(`${nope}${florida}`);
  alert(`${nope}${florida}`);
}else{
  //console.log(noDirections);
  alert(noDirections);
}

let answerTwo = prompt('Was I a Cheesemaker?').toLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y') {
  //console.log(`${correct} ${cheese}`);
  userCorrect++;
  alert(`${correct} ${cheese}`);
}else if(answerTwo === 'no' || answerTwo === 'n'){
  //console.log(`${nope} ${cheese}`);
  alert(`${nope} ${cheese}`);
}else{
  //console.log(noDirections);
  alert(noDirections);
}

let answerThree = prompt('Did I go to the University of Washington?').toLowerCase();
if(answerThree === 'no' || answerThree === 'n') {
  //console.log(`${correct} ${ucf}`);
  alert(`${correct} ${ucf}`);
  userCorrect++;
}else if(answerThree === 'yes' || answerThree === 'y'){
  //console.log(`${nope} ${ucf}`);
  alert(`${nope} ${ucf}`);
}else{
  //console.log(noDirections);
  alert(noDirections);
}

let answerFour = prompt('Was my Last Career as a Scuba Instructor?').toLowerCase();
if(answerFour === 'no' || answerFour === 'n') {
  //console.log(`${correct} ${scuba}`);
  userCorrect++;
  alert(`${correct} ${scuba}`);
}else if(answerFour === 'yes' || answerFour === 'y'){
  //console.log(`${nope} ${scuba}`);
  alert(`${nope} ${scuba}`);
}else{
  //console.log(noDirections);
  alert(noDirections);
}

let answerFive = prompt('Am I married?').toLowerCase();
if(answerFive === 'yes' || answerFive === 'y') {
  //console.log(`${correct} ${wife}`);
  userCorrect++;
  alert(`${correct} ${wife}`);
}else if(answerFive === 'no' || answerFive === 'n'){
  //console.log(`${nope} ${wife}`);
  alert(`${nope} ${wife}`);
}else{
  //console.log(noDirections);
  alert(noDirections);
}

let tryCount = 4;
let mango = 6;
let rMango = (`I have ${mango} mangos on my counter`);


while(tryCount){
  let answerSix = prompt(`${user}, How many Mangos are on my counter right now??`);
  console.log(typeof(answerSix));
  if(parseInt(answerSix) === mango){
    userCorrect++;
    alert(`Great job ${user} you got it right! \n${rMango}`);break;
  }
  else if(answerSix > mango){
    alert(`too high ${user} try again`);
  }else {
    alert(`too low ${user} try again`);
  }
  tryCount--;
  console.log(tryCount);
  if(tryCount === 0) {alert(`Sorry ${user}, All out of tries\n${rMango}`);
  }
}



let topMovies = ['memento','grand hotel budapest','princess mononoke','your name','spirited away','lord of the rings','howl\'s moving castle','the matrix','enter the dragon','snatch'];

let tryCount2 = 6;

circle: while(tryCount2){
  tryCount2--;
  let answerSeven = prompt('Try to guess one of my top ten favorite movies!\n little hint, I love me some anime and fantasy').toLowerCase();
  //console.log(answerSeven);
  for(let i = 0; i < topMovies.length; i++){
    //console.log('array' + i);
    if(answerSeven === topMovies[i]){
      alert('right');
      userCorrect++;
      break circle;
    }
  }
  alert(`Sorry ${user} thats wrong`);
  //console.log(tryCount2);
  if(tryCount2 === 0) { alert(`Sorry ${user}, All out of tries!\n These are a list of my top ten movies \n memento, grand hotel budapest, princess mononoke ,your name, spirited away, lord of the rings, howl\'s moving castle, the matrix, enter the dragon, snatch`);
  }
}

alert(`WoW!${user},Thanks for playing! \nYou got ${userCorrect} ot of 7 correct answers!`)
//console.log('correct answers' + userCorrect);
// Write goodbye msg with correct answer count
//alert(userCorrect);
