//computer choices//

function getCompChoice() {
    choices = ['rock', 'paper', 'scissor'];
    randNum = Math.floor(Math.random() * 3); //Generates a random number from 0 - 2
    choice = choices[randNum]; //selects one choice out of 3 from choices 
    console.log(randNum);
    console.log(choice);
    return choice;
}

let compChoice = getCompChoice(); //CALL getCompChoice to generate a computer choice and store in compChoice
console.log(compChoice);

// uman choiches//

function getHumanChoice() {
    choices = ['rock', 'paper', 'scissor'];
    input = prompt("please enter your choice : 0:'rock' 1:'paper' 2:'scissor'");// say user to enter the choice
    userChoice = choices[input];
    console.log(userChoice);
    //Checking if the user inputs the valid choice
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissor') {
        console.log(`You have choosed ${userChoice}`)
    }
    else {
        console.log("Please input a valid choice"); //If user inputs invalid choice inform them
    }
    return userChoice;
}
let humanChoice = getHumanChoice(); //CALL humanChoice to get user choices





