//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; // example sounds

const buttonsDiv = document.getElementById('buttons');

// create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
    currentAudio = audio;
  });

  buttonsDiv.appendChild(btn);
});

// create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

let currentAudio = null;

stopBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttonsDiv.appendChild(stopBtn);

// helper function to stop all sounds
function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
