// Select the elements
const petVideo = document.getElementById('petVideo');
const feedButton = document.getElementById('feedButton');
const realPetButton = document.getElementById('realPetButton');
const beautifulPersonButton = document.getElementById('beautifulPersonButton');
const mediaContainer = document.getElementById('mediaContainer');
const realPetVideo = document.getElementById('realPetVideo');
const beautifulPersonImage = document.getElementById('beautifulPersonImage');

// Handle "Feed the Pet" button clicks
feedButton.addEventListener('click', () => {
    feedButton.classList.add('btn-pressed');
    petVideo.src = 'eat.mp4';
    petVideo.style.display = 'block';
    petVideo.play();
    setTimeout(() => {
        realPetVideo.src = 'still.mp4';
        realPetVideo.style.display = 'block';
    petVideo.style.display = 'none';
    beautifulPersonImage.style.display = 'none';
    }, 5000); // 5 seconds
});

// Handle "Your Real Pet" button clicks
realPetButton.addEventListener('click', () => {
    realPetVideo.src = 'k.mp4'; // Replace with your video file
    beautifulPersonImage.src = ''; // Clear any previous image
    mediaContainer.style.display = 'block';
    realPetVideo.style.display = 'block';
    petVideo.style.display = 'none';
    beautifulPersonImage.style.display = 'none';
    setTimeout(() => {
        realPetVideo.src = 'still.mp4';
        realPetVideo.style.display = 'block';
    petVideo.style.display = 'none';
    beautifulPersonImage.style.display = 'none';
    }, 5000); // 5 seconds
});

// Handle "The World's Most Beautiful Person" button clicks
beautifulPersonButton.addEventListener('click', () => {
    beautifulPersonImage.src = 'tit.png'; // Replace with your image file
    realPetVideo.src = ''; // Clear any previous video
    mediaContainer.style.display = 'block';
    realPetVideo.style.display = 'none';
    
    petVideo.style.display = 'none';
    beautifulPersonImage.style.display = 'block';
    setTimeout(() => {
        realPetVideo.src = 'still.mp4';
        realPetVideo.style.display = 'block';
    petVideo.style.display = 'none';
    beautifulPersonImage.style.display = 'none';
    }, 5000); // 5 seconds
});
