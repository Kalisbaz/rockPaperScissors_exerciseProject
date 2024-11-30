function playGame() {
    // Variables to store scores
    let compScore = 0;
    let humanScore = 0;

    // Function to generate the computer's choice
    function getCompChoice() {
        const choices = ['rock', 'paper', 'scissor'];
        const randNum = Math.floor(Math.random() * 3);
        return choices[randNum];
    }

    // Function to get the human player's choice
    function getHumanChoice() {
        const choices = ['rock', 'paper', 'scissor'];
        const input = prompt("Please enter your choice: 0:'rock' 1:'paper' 2:'scissor'");
        const humanChoice = choices[input];

        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissor') {
            return humanChoice;
        } else {
            console.log("Invalid choice. Please try again.");
            return null;
        }
    }

    // Function to play a single round
    function playRound(compChoice, humanChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${compChoice}`);

        if (compChoice === humanChoice) {
            console.log("It's a draw.");
        } else if (
            (compChoice === 'rock' && humanChoice === 'scissor') ||
            (compChoice === 'paper' && humanChoice === 'rock') ||
            (compChoice === 'scissor' && humanChoice === 'paper')
        ) {
            console.log("Computer Wins this round.");
            compScore++;
        } else {
            console.log("You Win this round!");
            humanScore++;
        }

        console.log(`Scores -> You: ${humanScore}, Computer: ${compScore}`);
    }

    // Loop to play 5 rounds
    let round = 1;
    while (round <= 5) {
        console.log(`Round ${round}`);

        let validChoice = false; // Flag to check for valid input

        while (!validChoice) {
            const humanChoice = getHumanChoice(); // Get user's choice
            if (humanChoice) {
                const compChoice = getCompChoice(); // Generate computer's choice
                playRound(compChoice, humanChoice); // Play the round
                validChoice = true; // Exit validation loop
            }
        }

        round++; // Increment round only if valid
    }

    // Declare the final winner
    console.log("Game Over!");
    if (humanScore > compScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${compScore}.`);
    } else if (compScore > humanScore) {
        console.log(`Computer wins the game with a score of ${compScore} to ${humanScore}. Better luck next time!`);
    } else {
        console.log("The game is a draw!");
    }

    // Ask the user if they want to play again
    const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain === 'yes') {
        playGame(); // Restart the game
    } else {
        console.log("Thanks for playing! Goodbye!");
    }
}

// Call the main function to start the game
playGame();
