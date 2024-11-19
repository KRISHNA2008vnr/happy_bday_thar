// Confetti effect
const confettiContainer = document.querySelector('.confetti-container');
const colors = ['#FFD700', '#FF4500', '#FFD700', '#FFDF00', '#FF69B4'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 200);
