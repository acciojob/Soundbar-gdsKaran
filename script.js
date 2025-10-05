const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundId = button.dataset.sound;
    const audio = document.getElementById(soundId);

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = audio;
    audio.play().catch(() => {
      // prevent Cypress test crash if audio can't actually play
    });
  });
});

stopBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
