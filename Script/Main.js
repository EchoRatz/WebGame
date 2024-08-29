function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem('savedGame'));
    if (savedGame) {
        stat.lives = savedGame.lives;
        stat.wins = savedGame.wins;
        currentLevel = savedGame.currentLevel || 1; // Load saved level or default to 1
        wordAnswer = savedGame.wordAnswer || realDictionary[Math.floor(Math.random() * realDictionary.length)]; // Load or randomize
        updateHearts();
        alert("Game progress loaded!");
        resetGame(); // Reset game with loaded wordAnswer
    } else {
        alert("No saved game found!");
    }
}

document.getElementById('loadGame').addEventListener('click', loadGame);

document.addEventListener('DOMContentLoaded', () => {
  const menuMusic = document.getElementById('MenuMusic');
  const clickSound = document.getElementById('ClickSound');
  const startGameButton = document.getElementById('ClickButton');
  
  // Start playing the main menu music when the page loads
  menuMusic.volume = 0.5; // Set volume to 50%
  menuMusic.play(); // Play the background music

  // Handle click event on the "Play Game" button
  startGameButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    clickSound.currentTime = 0; // Rewind click sound to the start
    clickSound.play(); // Play click sound effect

    // Stop the main menu music before navigating to another page
    menuMusic.pause(); // Pause the music
    menuMusic.currentTime = 0; // Reset the music to the beginning

    // Redirect to Cutscene.html after a short delay to allow click sound to play
    setTimeout(() => {
      window.location.href = 'Cutscene.html'; // Navigate to the next HTML file
    }, 200); // 200 milliseconds delay for click sound to play
  });
});
