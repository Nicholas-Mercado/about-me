'use strict';



let user = prompt('What is your name?');
alert(`Welcome ${user} to my About Me page!`);
alert(`${user} ! lets see how much you know about me \n Answer the following questions with a yes or a no`);
let correct = (`Thats correct ${user}! `)
let noDirections = 'Come on now, read the instructions \n answer yes or no!'
let florida = 'I lived in Florida for almost a decade!'
let nope = (`Sorry thats wrong ${user}! `)
let cheese =  'I was!! I pasteurized milk and everything!'
let ucf = 'I went to the University of Central Florida \n UCF UCF UCF UCF UCF!'
let scuba = 'I hate going deep under water! I was an electrician!'
let wife = 'I am married to my wonderful wife!'

let answerOne = prompt('Did I live in Florida?').toLocaleLowerCase();
if(answerOne === 'yes' || answerOne === 'y') {
  console.log(`${correct} ${florida}`);
  alert(`${correct} ${florida}`);
}else if(answerOne === 'no' || answerOne === 'n'){
  console.log(`${nope}${florida}`);
  alert(`${nope}${florida}`);
}else{
  console.log(noDirections);
  alert(noDirections);
}

let answerTwo = prompt('Was I a Cheesemaker?').toLocaleLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y') {
  console.log(`${correct} ${cheese}`);
  alert(`${correct} ${cheese}`);
}else if(answerTwo === 'no' || answerTwo === 'n'){
  console.log(`${nope} ${cheese}`);
  alert(`${nope} ${cheese}`);
}else{
  console.log(noDirections);
  alert(noDirections);
}

let answerThree = prompt('Did I go to the University of Washington?').toLocaleLowerCase();
if(answerThree === 'no' || answerThree === 'n') {
  console.log(`${correct} ${ucf}`);
  alert(`${correct} ${ucf}`);
}else if(answerThree === 'yes' || answerThree === 'y'){
  console.log(`${nope} ${ucf}`);
  alert(`${nope} ${ucf}`);
}else{
  console.log(noDirections);
  alert(noDirections);
}

let answerFour = prompt('Was my Last Career as a Scuba Instructor?').toLocaleLowerCase();
if(answerFour === 'no' || answerFour === 'n') {
  console.log(`${correct} ${scuba}`);
  alert(`${correct} ${scuba}`);
  }else if(answerFour === 'yes' || answerFour === 'y'){
  console.log(`${nope} ${scuba}`);
  alert(`${nope} ${scuba}`);
}else{
  console.log(noDirections);
  alert(noDirections);
}

let answerFive = prompt('Am I married?').toLocaleLowerCase();
if(answerFive === 'yes' || answerFive === 'y') {
  console.log(`${correct} ${wife}`);
  alert(`${correct} ${wife}`);
}else if(answerFive === 'no' || answerFive === 'n'){
  console.log(`${nope} ${wife}`);
  alert(`${nope} ${wife}`);
}else{
  console.log(noDirections);
  alert(noDirections);
} 

alert(`Thanks for playing ${user}, enjoy my page!`)
