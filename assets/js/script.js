// Setting the scores and selecting our HTML elements.
let compWins = 1;
let userWIns = 1;
const userScore = document.getElementById('userCount');
const compScore = document.getElementById('compCount');
const buttons = document.querySelectorAll('.selection button');
const userImage = document.querySelector('.image i');
const compImage = document.querySelector('.computer i');
// The gameImages array below this contains the rock,paper, scissors, lizard and spock images.

const gameImages = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors", "fas fa-hand-lizard", "fas fa-hand-spock"];
const result = document.getElementById('results');

// Game Functionality: Setting forEach function for the buttons.
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Random rock paper scissor lizard spock for the computer and the user
            let clickedBtn = e.target.className;
            userImage.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * gameImages.length);
            compImage.className = gameImages[randomNum];
            // Game Score.
            // If it's a tied game .
            if (userImage.className === compImage.className) {
                userScore.innerHTML = userScore.innerHTML;
                compScore.innerHTML = compScore.innerHTML;
                result.innerHTML = "Tied Game!! ";
                result.style.color = 'blue';
            }
            // if it's win or lose.
            else if (userImage.className === gameImages[0] && compImage.className === gameImages[2]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[0] && compImage.className === gameImages[1]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[1] && compImage.className === gameImages[2]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[1] && compImage.className === gameImages[0]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[2] && compImage.className === gameImages[0]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[2] && compimage.className === gameImages[1]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[0] && compimage.className === gameImages[3]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[3] && compimage.className === gameImages[4]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[4] && compimage.className === gameImages[2]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[2] && compimage.className === gameImages[3]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[3] && compimage.className === gameImages[1]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[1] && compimage.className === gameImages[4]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[4] && compimage.className === gameImages[0]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                result.innerHTML = "Congratulations! You Won! ";
                result.style.color = 'green';
            } else if (userImage.className === gameImages[3] && compImage.className === gameImages[0]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[3] && compImage.className === gameImages[2]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[4] && compImage.className === gameImages[1]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[4] && compImage.className === gameImages[3]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[2] && compImage.className === gameImages[4]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[1] && compImage.className === gameImages[3]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            } else if (userImage.className === gameImages[0] && compImage.className === gameImages[4]) {
                compScore.innerHTML = compWins;
                compWins++;
                result.innerHTML = "Sorry, you lose! ";
                result.style.color = 'red';
            }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.