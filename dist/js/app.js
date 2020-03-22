
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const userImage_span = document.getElementById('userImage');
const compImage_span = document.getElementById('compImage');


main();
function main() {
    rock_div.addEventListener('click', function () {
        blankImages();
        userImage_span.innerHTML = "<img src=\"images/rock_200x200_plain.png\" alt=\"\">";
        game("r");
    });
    paper_div.addEventListener('click', function () {
        blankImages();
        userImage_span.innerHTML = "<img src=\"images/paper_200x200_plain.png\" alt=\"\">";
        game("p");
    });
    scissors_div.addEventListener('click', function () {
        blankImages();
        userImage_span.innerHTML = "<img src=\"images/scissors_200x200_plain.png\" alt=\"\">";
        game("s");
    });

};

function game(userChoice) {
    const computerChoice = getCompChoice();
    console.log(userChoice + ' ' + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
        default:
            lose(computerChoice, userChoice);
    }
}

function getCompChoice() {

    const choices = ['r', 'p', 's'];
    randomNumber = (Math.floor(Math.random() * 3));
    console.log(randomNumber);
    if (randomNumber === 0) compImage_span.innerHTML = "<img src=\"images/rock_200x200_plain.png\" alt=\"\">";
    if (randomNumber === 1) compImage_span.innerHTML = "<img src=\"images/paper_200x200_plain.png\" alt=\"\">";
    if (randomNumber === 2) compImage_span.innerHTML = "<img src=\"images/scissors_200x200_plain.png\" alt=\"\">";
    return choices[randomNumber];

}

function win(user, computer) {
    userScore++;
    result_p.innerHTML = `${capitalizeFirstLetter(convertToWord(user))} beats ${convertToWord(computer)} . User Wins!`
    userScore_span.innerHTML = userScore;
}

function lose(computer, user) {
    compScore++
    result_p.innerHTML = `${capitalizeFirstLetter(convertToWord(computer))} beats ${convertToWord(user)} . Computer Wins!`
    compScore_span.innerHTML = compScore;
}

function draw() {
    result_p.innerHTML = "It's a draw";
}

function convertToWord(letter) {
    if (letter === 'r') return "rock";
    if (letter === 'p') return "paper";
    return "scissors";

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function blankImages() {
    userImage_span.innerHTML = "";
    compImage_span.innerHTML = "";

}



