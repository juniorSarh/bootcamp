// 1. Grab DOM elements
const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-btn');

let score = 0;
let activeHole = null;
let gameInterval;

// 2. Function to show a mole in a random hole
function showMole() {
    // If there's already a mole out, remove it first
    if (activeHole) {
        activeHole.classList.remove('mole');
    }

    // Pick a random hole (0 to 5)
    const randomIndex = Math.floor(Math.random() * holes.length);
    activeHole = holes[randomIndex];

    // Add the CSS class to make it turn red
    activeHole.classList.add('mole');
}

// 3. Set up click listeners for the holes
holes.forEach(hole => {
    hole.addEventListener('click', () => {
        // Check if the clicked hole currently has the mole class
        if (hole.classList.contains('mole')) {
            score++;
            scoreDisplay.textContent = score; // Update the DOM score
            hole.classList.remove('mole');   // Hide the mole immediately on whack
        }
    });
});

// 4. Start the game loop when the button is clicked
startButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;
    
    // Clear any existing game loops just in case
    clearInterval(gameInterval); 
    
    // Run showMole every 1000ms (1 second)
    gameInterval = setInterval(showMole, 1000); 
});

