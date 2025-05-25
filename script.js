const sounds = ['applause', 'bao', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons');

let currentAudio;

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.remove(); // Remove from DOM so Cypress sees it cleanly
    currentAudio = null;
  }
}

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSound();

    const audio = document.createElement('audio');
    audio.src = `./sounds/${sound}.mp3`;
    audio.setAttribute('autoplay', 'true');
    audio.setAttribute('data-testid', 'audio'); // For Cypress detection
    document.body.appendChild(audio);

    audio.play().catch(err => console.error('Playback error:', err));
    currentAudio = audio;
  });

  buttons.appendChild(btn);
});

const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', () => {
  stopSound();
});

buttons.appendChild(stopBtn);


