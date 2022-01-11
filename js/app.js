'use strict';

//console.log('hey')

let user = prompt('what is your name');

alert('welcome ${user}');

let answerOne = prompt('Do I have kids?').toLocaleLowerCase();
//spelled out
//let normalizedAnswerOne = answerOne.toLocaleLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
  console.log('yes')
}else if(answerOne === 'no' || answerOne === 'n'){

}else{
  console.log('Please read instructions')
}