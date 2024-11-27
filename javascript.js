function getCompChoice() {
    const choices = ['rock', 'paper', 'scissor']; // Declare as local with const
    const randNum = Math.floor(Math.random() * 3); // Generates a random number from 0 - 2
    const choice = choices[randNum]; // Selects one choice out of 3
    console.log(randNum);
    console.log(choice);
    return choice;
}

const compChoice = getCompChoice(); // Generate a computer choice
console.log(`Computer chose: ${compChoice}`);

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissor']; // Declare as local with const
    const input = prompt("Please enter your choice: 0:'rock' 1:'paper' 2:'scissor'"); // Prompt human for input
    const humanChoice = choices[input];


    // Validate human input
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissor') {

        return humanChoice;
    } else {
        console.log("Please input a valid choice.");
        return null;
    }
}

const humanChoice = getHumanChoice(); // Get human choice
if (humanChoice) {

}
console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${compChoice}`);

// Variables to store scores
let compScore = 0;
let humanScore = 0;



function playRound(compChoice, humanChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase(); // Case sensitive normalized
    if (compChoice === humanChoice) {
        drawGame(compChoice, humanChoice, compScore, humanScore);
    }
    else if ((compChoice === 'rock' && humanChoice === 'scissor') || (compChoice === 'paper' && humanChoice === 'rock ') || (compChoice === 'scissor' && humanChoice === 'paper')) {
        compWin(compChoice, humanChoice, compScore, humanScore);
    }
    else {
        humanWin(compChoice, humanChoice, compScore, humanScore);
    }
}

function drawGame(compChoice, humanChoice, compScore, userScore) {
    console.log(`It's a draw. Computer choose ${compChoice} and you choose ${humanChoice}`);
    compScore++;
    userScore++;
    console.log(`your score: ${userScore} Computer score: ${compScore} `)

}


function compWin(compChoice, humanChoice, compScore, humanScore) {
    console.log(`Computer Wins. Computer choose ${compChoice} and you choose ${humanChoice}`);
    compScore++;
    console.log(`your score: ${humanScore} Computer score: ${compScore} `)
}
//Results after human win
function humanWin(compChoice, humanChoice, compScore, humanScore) {
    console.log(`You Win. Computer choose ${compChoice} and you choose ${humanChoice}`);
    humanScore++;
    console.log(`your score: ${humanScore} Computer score: ${compScore} `)
}


playRound(compChoice, humanChoice);