// Make three buttons to play
// add an event listner to listener for our play function
// get the right btn value, use "on click html attribute"
// get the btn text value
// use as an argument in our play function
// First one to win 3 round wins the game

const btns = document.querySelectorAll(".btn");
let computerScore = 0;
let userScore = 0;
let ties = 0;
let buttons = document.querySelector(".home");

let winnerDiv = document.createElement("div");
let winnerH1 = document.createElement("H1");
// const scissors = document.querySelector(".scissors");

// play if the button is clicked
function playOnClick(ele) {
  let btnValue = ele.innerText; // Get the value of user inp according to button pressed.
  const cPlay = computerPlay(); // Get computer input.
  let result = play((cS = cPlay), (uS = btnValue)); // Play one round

  document.getElementById("winner").textContent = result; // get round winner
  document.querySelector(
    ".userSelection"
  ).textContent = `You selected: ${btnValue}`; //get user selection
  document.querySelector(
    ".computerSelection"
  ).textContent = `Computer selected: ${cPlay}`; //pc selection
  document.querySelector(".scoreU").textContent = `User Score: ${userScore}`; //get User Score
  document.querySelector(
    ".scoreC"
  ).textContent = `Computer Score: ${computerScore}`; //get Computer Score

  checkWinner();
  playAgain();
}

function checkWinner() {
  let wButton = false;
  // The first one who wins THREE rounds wins the game
  if (computerScore === 3 || userScore === 3) {
    // Delete all the elements in  the body
    buttons.querySelectorAll("*").forEach((n) => n.remove());
    let winner = "";
    // Checks who wins
    if (computerScore > userScore) {
      winner = "I won, prepare to be destroyed by my algorithms";
      wButton = true;
    } else {
      winner = "You won the Game, the World is Saved!!!";
      wButton = true;
    }
    // Display who wins.

    let winnerText = document.createTextNode(winner);
    winnerH1.appendChild(winnerText);
    winnerDiv.appendChild(winnerH1);
    console.log(winnerText);

    buttons.appendChild(winnerDiv);

    playAgain(wButton);
    return true
  }
}

// play again function. 
function playAgain(wButton) {
  if(wButton){
    console.log('someone won');
    let btnPlayAgain = document.createElement("button");
    btnPlayAgain.classList.add('play-again')
    let playAgainText = document.createTextNode('Play Again');
    btnPlayAgain.appendChild(playAgainText);
    btnPlayAgain.addEventListener('click', _ => location.reload())
    winnerDiv.appendChild(btnPlayAgain);
  }else{
    console.log('no one won yet');
  }
}

// create a function that randomly return rock, paper of scissors
// random method to retun rock paper scissors randomly.
function computerPlay() {
  // create a variable with an array of rock paper and scissors
  const game_values = ["rock", "paper", "scissors"];
  // return a ramdom value from that array
  let cPlay = Math.floor(Math.random() * game_values.length);
  return game_values[cPlay];
}

// Ask user to input rock, paper or scissors
function askUser() {
  let uPlay = prompt("enter rock paper or scissors");
  //make all character lower case
  uPlay = uPlay.toLowerCase();
  return uPlay;
}

// Play a round
// create a funtion play and call the functions
function play(cS = computerPlay(), uS = askUser()) {
  //  console.log(uS, cS)
  // if user input rock and computer paper, computer won
  if (uS == "rock" && cS == "paper") {
    computerScore++;
    return "I won this round, HAHAHA";

    // if user input scisors  and computer rock, computer won
  } else if (cS == "rock" && uS == "scissors") {
    computerScore++;
    return "I won this round, HAHAHA";
    // if user input paper and computer scissor, computer won
  } else if (uS == "paper" && cS == "scissors") {
    computerScore++;
    return "I won this round, HAHAHA";
    // if both values match, is a tie
  } else if (uS == cS || cS == uS) {
    ties++;
    return "this round was a tie";
    // if none of the above use won
  } else {
    userScore++;
    return "You won this round";
  }
  // return the if user won or lose
}
