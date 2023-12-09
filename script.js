// Get references to the screens and buttons
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const scoreBoard = document.getElementById('score');
const gameOverScreen = document.getElementById('game-over-screen');
const startButton = document.getElementById('start-button');
const playAgainButton = document.getElementById('play-again-button');
const winnerMessage = document.getElementById('winner-message');

// Start button event listener
startButton.addEventListener('click', function() {
    startScreen.style.display = 'none'; // Hide start screen
    gameScreen.style.display = 'block';  // Show game screen
    scoreBoard.style.position = 'absolute';
    scoreBoard.style.display = 'flex';
});

// Play again button event listener
playAgainButton.addEventListener('click', function() {
    gameOverScreen.style.display = 'none'; // Hide game over screen
    gameScreen.style.display = 'block';     // Show game screen
    scoreBoard.style.position = 'absolute';
    scoreBoard.style.display = 'flex';
});

// Function to show the game over screen
function showGameOver(winner) {
    gameScreen.style.display = 'none';   // Hide game screen
    gameOverScreen.style.display = 'flex'; // Show game over screen
    scoreBoard.style.display = 'none';
    scoreBoard.style.position = 'relative';
    winnerMessage.textContent = winner + ' Wins!'; // Display winner message
}

// Example of ending the game
export function endGame(winningPlayer) {
    // Call this function when a player wins
    showGameOver(winningPlayer);
}


