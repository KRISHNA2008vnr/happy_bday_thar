let currentPage = 0; // Track the current page (0: front, 1: middle, 2: back)

function flipCard() {
    const card = document.getElementById('card');

    if (currentPage === 0) {
        // First flip: go to the middle page
        currentPage = 1;
        card.classList.add('flipped1');
    } else if (currentPage === 1) {
        // Second flip: go to the back page
        currentPage = 2;
        card.classList.remove('flipped1');
        card.classList.add('flipped2');
    } else {
        // Third flip: go back to the front page
        currentPage = 0;
        card.classList.remove('flipped2');
    }
}

// Function to create continuous confetti
function createContinuousConfetti() {
    const container = document.getElementById('confettiContainer');
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Colorful confetti
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        container.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }, 200); // Create a new confetti every 200 ms
}

// Start continuous confetti when the page loads
window.onload = () => {
    createContinuousConfetti();
};
