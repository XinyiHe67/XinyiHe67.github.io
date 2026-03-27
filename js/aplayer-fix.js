function bindAplayerAutoNext() {
  const players = window.aplayers || [];
  if (!players.length) {
    console.log('No APlayer instances found.');
    return;
  }

  const ap = players[0];
  if (!ap) {
    console.log('APlayer instance not found.');
    return;
  }

  if (ap._autoNextBound) return;
  ap._autoNextBound = true;

  const audio = ap.audio;
  if (!audio) {
    console.log('APlayer audio element not found.');
    return;
  }

  audio.addEventListener('ended', function () {
    console.log('Audio ended, switching to next song...');
    try {
      ap.skipForward();

      setTimeout(() => {
        try {
          ap.play();
        } catch (e) {
          console.error('Failed to play next song:', e);
        }
      }, 300);
    } catch (e) {
      console.error('Failed to skip forward:', e);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(bindAplayerAutoNext, 1500);
});

document.addEventListener('pjax:complete', function () {
  setTimeout(bindAplayerAutoNext, 1500);
});