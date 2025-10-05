const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');
let audio; // keep track of current audio

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundSrc = button.dataset.sound;

    // Stop previous audio
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Play new audio
    audio = new Audio(soundSrc);
    audio.play();
  });
});

stopBtn.addEventListener('click', () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});
