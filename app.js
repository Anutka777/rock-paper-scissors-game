// Variables for DOM
container = document.getElementById('container');
buttons = document.querySelectorAll('.choice');
ngButton = document.getElementById('newGame');

// Storing game score
let playerScore = 0;
let computerScore = 0;

// Player throw and round play for each button
document.getElementById("rock").addEventListener("click", playSingleRoundWithRock);
document.getElementById("paper").addEventListener("click", playSingleRoundWithPaper);
document.getElementById("scissors").addEventListener("click", playSingleRoundWithScissors);

// New game button
ngButton.addEventListener('click', newGame);

// Adding div with score
const divScore = document.createElement('div');
divScore.id = "divScore";
const divScoreText = document.createElement('p');
divScoreText.id = "scoreText";
const divScoreResults = document.createElement('p');
divScoreResults.id = 'scoreResults';
const divScoreWinLoose = document.createElement('p');
divScoreWinLoose.id = 'scoreWinLoose';
divScore.appendChild(divScoreText);
divScore.appendChild(divScoreResults);
divScore.appendChild(divScoreWinLoose);
container.appendChild(divScore);
 
// Computer random throw function
function computerPlay() {
  // Array fo choices
  const throwVariants = ['Rock', 'Paper', 'Scissors'];
  // Random item from array
  let computerSelection = throwVariants[Math.floor(Math.random()*throwVariants.length)];
  return (computerSelection);
}

// Function for rock button
function playSingleRoundWithRock(e) {
  let playerSelection = e.target.textContent;
  let computerSelection = computerPlay();
  
  if (computerSelection === "Rock") {
    divScoreText.innerHTML = `${playerSelection} vs ${computerSelection}\n\nIt's a tie ...`;
    } else if (computerSelection === "Paper") {
      divScoreText.innerHTML = `You chose ${playerSelection}. Opponent chose ${computerSelection}\n\nYou lost a round =(`;
      computerScore++;
    } else if (computerSelection === "Scissors") {
      divScoreText.innerHTML = `You chose ${playerSelection}. Opponent chose ${computerSelection}\n\nYou won a round!`;
      playerScore++;
    }
    divScoreResults.innerHTML = `${playerScore} - ${computerScore}`;
    if (computerScore === 5 || playerScore === 5) {
      endGame(computerScore, playerScore);
    } 
  }

// Function fo paper button
function playSingleRoundWithPaper(e) {
  let playerSelection = e.target.textContent;
  let computerSelection = computerPlay();
  
  if (computerSelection === "Paper") {
    divScoreText.innerHTML = `${playerSelection} vs ${computerSelection}\n\nIt's a tie ...`;
    } else if (computerSelection === "Scissors") {
      divScoreText.innerHTML = `You chose ${playerSelection}. Opponent chose ${computerSelection}\n\nYou lost a round =(`;
      computerScore++;
    } else if (computerSelection === "Rock") {
      divScoreText.innerHTML = `You chose ${playerSelection}. Opponent chose ${computerSelection}\n\nYou won a round!`;
      playerScore++;
    } 
    divScoreResults.innerHTML = `${playerScore} - ${computerScore}`;
    if (computerScore === 5 || playerScore === 5) {
      endGame(computerScore, playerScore);
    } 
  }

// Function for Scissors button
function playSingleRoundWithScissors(e) {
  let playerSelection = e.target.textContent;
  let computerSelection = computerPlay();
  
  if (computerSelection === "Scissors") {
    divScoreText.innerHTML = `${playerSelection} vs ${computerSelection}\n\nIt's a tie ...`;
    } else if (computerSelection === "Rock") {
      divScoreText.innerHTML = `You chose ${playerSelection}. Opponent chose ${computerSelection}\n\nYou lost a round =(`;
      computerScore++;
    } else if (computerSelection === "Paper") {
      divScoreText.innerHTML = `You chose ${playerSelection}. Opponent chose ${computerSelection}\n\nYou won a round!`;
      playerScore++;
    } 
    divScoreResults.innerHTML = `${playerScore} - ${computerScore}`;
    if (computerScore === 5 || playerScore === 5) {
      console.log(computerScore > playerScore);
      console.log(playerScore > computerScore);
      console.log("Scissors");
      endGame(computerScore, playerScore);
    }
  }

// Result function and finish the game
function endGame(computerScore, playerScore) {

 // Hide buttons 
 Array.from(buttons).forEach(function(btn) {
   btn.style.display = 'none';
 });

  // Display results
  if (computerScore > playerScore) {
    divScoreWinLoose.innerHTML = "Opponent won the game =(";
  } else if (playerScore > computerScore) {
    divScoreWinLoose.innerHTML = "You won the game!";
  } else {
    divScoreWinLoose.innerHTML = "Oops! Something went wrong here. Contact me if you see thimessage\nYou can refresh page for new game.";
  
  // Display New Game button
  ngButton.style.display = 'inline-block';
  }
}
   
// New Game function
function newGame() {
  Array.from(buttons).forEach(function(btn) {
    btn.style.display = 'inline-block';
  });
  playerScore = 0;
  computerScore = 0;
  divScoreText.innerHTML = '';
  divScoreResults.innerHTML = '';
  divScoreWinLoose.innerHTML = '';
}