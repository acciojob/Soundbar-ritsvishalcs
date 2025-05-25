//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3']; // Your sound filenames (without .mp3)

const buttonsContainer = document.getElementById('buttons');

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => playSound(sound));
  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

let currentAudio;

function playSound(name) {
  stopSound(); // Stop any playing sound first
  currentAudio = new Audio(`./sounds/${name}.mp3`);
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
