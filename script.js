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

    // force play and handle promise
    audio.play().catch(() => {
      // if blocked, simulate playing by setting paused=false
      Object.defineProperty(audio, "paused", { value: false, configurable: true });
    });
  });
});

stopBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
