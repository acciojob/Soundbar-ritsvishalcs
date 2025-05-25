const sounds = ['applause', 'bao', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

let currentAudio;

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.remove();
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
    audio.setAttribute('controls', ''); // optional for manual test
    audio.setAttribute('autoplay', 'true');
    audio.setAttribute('data-testid', sound); // optional for Cypress test
    document.body.appendChild(audio);

    audio.play().catch(console.error);
    currentAudio = audio;
  });

  buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);


