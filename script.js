const sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6'];
const buttonsContainer = document.getElementById('buttons');

let currentAudio;

// Create sound buttons
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSound();
    currentAudio = new Audio(`./sounds/${sound}.mp3`);
    currentAudio.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
  });
  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

