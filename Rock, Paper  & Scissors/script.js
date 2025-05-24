
//Step 1
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  console.log(getRandomComputerResult());  

let playerScore = 0;
let computerScore = 0;

//Step 2
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

//Step 3
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if(userOption === 1){
      return `Player wins!  ${userOption} beats ${computerResult}`;
    }else if(computerResult === 1){
      return `Computer wins!  ${computerResult} beats ${userOption}`;
    }else{
      return `It's a tie! Both chose ${userOption}`;
  
    }
   
  }
  
  console.log(getRoundResults("Rock"));
  console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

  //Step 4
  const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {
  const  computerResult = getRandomComputerResult();
  const results = getRoundResults(userOption, computerResult);

  if (results === 3){
    playerScore++;
    roundResultsMsg.innerText = `Player wins! ${userOption} beats ${computerResult}`;
  }else if (results >= 2) {
    computerScore++;
    roundResultsMsg.innerText = `Computer wins! ${computerResult} beats ${userOption}`;
  }else{
    roundResultsMsg.innerText = `It's a tie! Both chose ${userOption}`;

  }
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;


};


showResults("Rock");

//Step 5 
/*const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;


  
  if(computerScore === 3 ){   

    winnerMsgElement.innerText = "Computer has won the game!" ;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";


  } else if( playerScore === 3){
     winnerMsgElement.innerText =  "Player has won the game!";
     resetGameBtn.style.display = "block";
     optionsContainer.style.display = "none";

  }else{
   winnerMsgElement.innerText = "";
   resetGameBtn.style.display = "none";
   optionsContainer.style.display = "block";
  }

};

 resetGameBtn.addEventListener( "click", () =>{
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = 0;
    computerScoreSpanElement.innerText = 0;
    winnerMsgElement.innerText = 0;
    roundResultsMsg.innerText = 0;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";

  });*/

  //OR
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };

  //Step 6 
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";  

};
