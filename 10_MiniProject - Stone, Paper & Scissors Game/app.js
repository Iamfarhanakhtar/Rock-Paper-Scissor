let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const drawGame = () => {
//   console.log("Game was draw.");
  msg.innerText = "Game was draw!";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  options = ["rock", "paper", "scissor"];
  randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    // console.log("You Win.");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText =`You Win. Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("You Lose.");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose. Your ${userChoice} beaten by ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);

  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper scissor ->
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock scissor ->
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      // rock paper ->
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked =", userChoice);
    playGame(userChoice);
  });
});
