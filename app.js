// Make three buttons to play 
// add an event listner to listener for our play function
// get the right btn value, use "on click html attribute"
// check is the btn has a value of r p or s

const btns = document.querySelectorAll(".btn");

// const paper = document.querySelector(".paper");
// const scissors = document.querySelector(".scissors");

function getText(ele){
  let btnValue = ele.innerText;
  let result = (play(cS = computerPlay(), uS = btnValue));
  document.getElementById('winner').textContent = result
  
  return result;
}








// create a function that randomly return rock, paper of scissors
// random method to retun rock paper scissors randomly.
function computerPlay(){
 // create a variable with an array of rock paper and scissors
 const game_values = ['rock', 'paper', 'scissors'];
 // return a ramdom value from that array
 let cPlay = Math.floor(Math.random()* game_values.length)  ;
 return game_values[cPlay];
}

// Ask user to input rock, paper or scissors
function askUser(){
 let uPlay = prompt('enter rock paper or scicssors');
 //make all character lower case
 uPlay = uPlay.toLowerCase()
 return uPlay
}

// Play a round 
// create a funtion play and call the functions
function play(cS = computerPlay(), uS = askUser()){
//  console.log(uS, cS)
 // if user input rock and computer paper, computer won
 if(uS == 'rock' && cS == 'paper' ){

  return 'computer won'
  // if user input scisors  and computer rock, computer won
 }else if(uS == 'scissors' && cS == 'rock'){
  return 'computer won'
  // if user input paper and computer scissor, computer won 
 }else if(uS == 'paper' && cS == 'scissors'){
  return 'computer won'
  // if both values match, is a tie 
 }else if(uS == cS || cS ==uS){
  return 'tie'
  // if none of the above use won
 }else{
  return 'You won'
 }
 // return the if user won or lose

}