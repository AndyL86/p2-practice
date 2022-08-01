// Setting the scores and selecting our HTML elements.
let compWins = 1;
let userWIns = 1;
const userScore = document.getElementById('userScore');
const compScore = document.getElementById('compScore');
const buttons = document.querySelectorAll('.selection button');
const userImage = document.querySelector('.image i');
const compImage = document.querySelector('.computer i');
// The gameImages array below this contains the rock,paper, scissors, lizard and spock images.

const gameImages = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors", "fas fa-hand-lizard", "fas fa-hand-spock"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

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
            // If it's a Tie .
            if (userImage.className === compImage.className) {
                userScore.innerHTML = userScore.innerHTML;
                compScore.innerHTML = compScore.innerHTML;
                text.innerHTML = "Tied Game!! ";
                text2.innerHTML = text.innerHTML;
            }
            // if it's win or lose.
            else if (userImage.className === gameImages[0] && compImage.className === gameImages[2]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;
            } else if (userImage.className === gameImages[0] && compImage.className === gameImages[1]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;
            } else if (userImage.className === gameImages[1] && compImage.className === gameImages[2]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;
            } else if (userImage.className === gameImages[1] && compImage.className === gameImages[0]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;
            } else if (userImage.className === gameImages[2] && compImage.className === gameImages[0]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;
            } else if (userImage.className === gameImages[2] && compimage.className === gameImages[1]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;
            } else if (userImage.className === gameImages[0] && compimage.className === gameImages[3]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[3] && compimage.className === gameImages[4]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[4] && compimage.className === gameImages[2]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[2] && compimage.className === gameImages[3]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[3] && compimage.className === gameImages[1]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[1] && compimage.className === gameImages[4]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[4] && compimage.className === gameImages[0]) {
                userScore.innerHTML = userWIns;
                userWIns++;
                text.innerHTML = "Congratulations! You Won! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[3] && compImage.className === gameImages[0]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[3] && compImage.className === gameImages[2]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[4] && compImage.className === gameImages[1]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[4] && compImage.className === gameImages[3]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[2] && compImage.className === gameImages[4]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[1] && compImage.className === gameImages[3]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;

            } else if (userImage.className === gameImages[0] && compImage.className === gameImages[4]) {
                compScore.innerHTML = compWins;
                compWins++;
                text.innerHTML = "Sorry, you lose! ";
                text2.innerHTML = text.innerHTML;
            }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.