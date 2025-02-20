//All keys

const keys = document.querySelectorAll('.key');

// Listeners

// Event listener for all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// Handlers
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
}