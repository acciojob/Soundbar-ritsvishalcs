const sounds = ['applause', 'bao', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

let currentAudioElement;

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSound();

    const audio = document.createElement('audio');
    audio.src = `./sounds/${sound}.mp3`;
    audio.setAttribute('autoplay', 'true');
    document.body.appendChild(audio);

    currentAudioElement = audio;

    audio.play().catch(err => console.error("Play error:", err));
  });
  buttonsContainer.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

function stopSound() {
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0;
    currentAudioElement.remove(); // remove from DOM so Cypress detects stop
  }
}


