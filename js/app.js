'use strict';

let userCorrect = 0;

let user = prompt('What is your name?');
alert(`Welcome ${user} to my About Me page!`);
alert(`${user} ! Lets see how much you know about me \n Answer the following questions with a yes or no`);
let correct = (`Thats correct ${user}! `);
let noDirections = 'Come on now, read the instructions \n answer yes or no!';
let florida = 'I lived in Florida for almost a decade!';
let nope = (`Sorry thats wrong ${user}! `);
let cheese =  'I was!! I pasteurized milk and everything!';
let ucf = 'I went to the University of Central Florida \n UCF UCF UCF UCF UCF!';
let scuba = 'I hate going deep under water! I was an electrician!';
let wife = 'I am married to my wonderful wife!';
let favMovies = 'Memento, Grand Hotel Budapest, Princess Mononoke , Your Name, Spirited Away, Lord of the Rings, Howl\'s Moving Castle, The Matrix, Enter the dragon, Snatch`';

let topMovies = ['memento','grand hotel budapest','princess mononoke','your name','spirited away','lord of the rings','howl\'s moving castle','the matrix','enter the dragon','snatch'];
let tryCount = 4;
let mango = 6;
let rMango = (`I have ${mango} mangos on my counter`);

let tryCount2 = 6;

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

function questionOne(){
  let answerOne = prompt('Did I live in Florida?').toLowerCase();
  if(answerOne === 'yes' || answerOne === 'y') {
    userCorrect++;
    alert(`${correct} ${florida}`);
  }else if(answerOne === 'no' || answerOne === 'n'){
    alert(`${nope}${florida}`);
  }else{
    alert(noDirections);
  }
}

function questionTwo(){
  let answerTwo = prompt('Was I a Cheesemaker?').toLowerCase();
  if(answerTwo === 'yes' || answerTwo === 'y') {
    userCorrect++;
    alert(`${correct} ${cheese}`);
  }else if(answerTwo === 'no' || answerTwo === 'n'){
    alert(`${nope} ${cheese}`);
  }else{
    alert(noDirections);
  }
}

function questionThree(){
  let answerThree = prompt('Did I go to the University of Washington?').toLowerCase();
  if(answerThree === 'no' || answerThree === 'n') {
    alert(`${correct} ${ucf}`);
    userCorrect++;
  }else if(answerThree === 'yes' || answerThree === 'y'){
    alert(`${nope} ${ucf}`);
  }else{
    alert(noDirections);
  }
}

function questionFour(){
  let answerFour = prompt('Was my Last Career as a Scuba Instructor?').toLowerCase();
  if(answerFour === 'no' || answerFour === 'n') {
    userCorrect++;
    alert(`${correct} ${scuba}`);
  }else if(answerFour === 'yes' || answerFour === 'y'){
    alert(`${nope} ${scuba}`);
  }else{
    alert(noDirections);
  }
}

function questionFive(){
  let answerFive = prompt('Am I married?').toLowerCase();
  if(answerFive === 'yes' || answerFive === 'y') {
    userCorrect++;
    alert(`${correct} ${wife}`);
  }else if(answerFive === 'no' || answerFive === 'n'){
    alert(`${nope} ${wife}`);
  }else{
    alert(noDirections);
  }
}



function questionSix(){
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
    if(tryCount === 0) {alert(`Sorry ${user}, All out of tries\n${rMango}`);
    }
  }
}




function questionSeven(){
  circle: while(tryCount2){
    tryCount2--;
    let answerSeven = prompt('Try to guess one of my top ten favorite movies!\n little hint, I love me some anime and fantasy').toLowerCase();
    for(let i = 0; i < topMovies.length; i++){
      if(answerSeven === topMovies[i]){
        alert(`Thats right! Here are a list of all my favorite movies:\n${favMovies}`);
        userCorrect++;
        break circle;
      }
    }
    alert(`Sorry ${user} thats wrong`);
    if(tryCount2 === 0) { alert(`Sorry ${user}, All out of tries!\n These are a list of my top ten movies \n ${favMovies}`);
    }
  }
}


alert(`WoW!${user},Thanks for playing! \nYou got ${userCorrect} out of 7 correct answers!`);
