// AUDIO PLAYER CU 3 BUTOANE: START, PAUSE, STOP
document.addEventListener('DOMContentLoaded', function() {
  const players = document.querySelectorAll('.music-player');
  
  console.log(`🎵 S-au găsit ${players.length} player-e audio`);
  
  players.forEach((player, index) => {
    console.log(`🎵 Inițializare player ${index + 1}`);
    
    const audio = player.querySelector('.audio-element');
    const startBtn = player.querySelector('.start-btn');
    const pauseBtn = player.querySelector('.pause-btn');
    const stopBtn = player.querySelector('.stop-btn');
    const progressFill = player.querySelector('.progress-fill');
    const currentTimeEl = player.querySelector('.current-time');
    const totalTimeEl = player.querySelector('.total-time');
    const progressBar = player.querySelector('.progress-bar');
    
    if (!audio) {
      console.error(`❌ Player ${index + 1}: Nu s-a găsit elementul audio`);
      return;
    }
    
    console.log(`🎵 Player ${index + 1} - Sursa audio:`, audio.src);
    
    // FUNCȚIE PENTRU AFIȘAREA TIMPULUI (FĂRĂ MILISECUNDE)
    function formatTime(seconds) {
      if (isNaN(seconds) || !isFinite(seconds)) {
        return "0:00";
      }
      
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    // FUNCȚIE PENTRU DURATA TOTALĂ
    function formatTotalTime(seconds) {
      if (isNaN(seconds) || !isFinite(seconds)) {
        return "0:00";
      }
      
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    // ACTUALIZEAZĂ STARE BUTOANE
    function updateButtonStates() {
      if (audio.paused || audio.ended) {
        // Audio oprit sau terminat
        startBtn.disabled = false;
        startBtn.classList.add('active');
        pauseBtn.disabled = true;
        pauseBtn.classList.remove('active');
        stopBtn.disabled = true;
        stopBtn.classList.remove('active');
      } else {
        // Audio în curs de redare
        startBtn.disabled = true;
        startBtn.classList.remove('active');
        pauseBtn.disabled = false;
        pauseBtn.classList.add('active');
        stopBtn.disabled = false;
        stopBtn.classList.add('active');
      }
    }
    
    // ACTUALIZEAZĂ AFIȘAREA TIMPULUI CURENT
    function updateCurrentTime() {
      const currentTime = audio.currentTime;
      currentTimeEl.textContent = formatTime(currentTime);
    }
    
    // ACTUALIZEAZĂ DURATA TOTALĂ
    function updateTotalTime() {
      const duration = audio.duration;
      
      if (duration && !isNaN(duration) && isFinite(duration) && duration > 0) {
        totalTimeEl.textContent = formatTotalTime(duration);
        console.log(`🎵 Player ${index + 1}: Durată totală: ${formatTotalTime(duration)}`);
      } else {
        totalTimeEl.textContent = "0:00";
      }
    }
    
    // ACTUALIZEAZĂ PROGRESS BAR
    function updateProgress() {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      
      if (duration && !isNaN(duration) && duration > 0) {
        const progressPercentValue = (currentTime / duration) * 100;
        progressFill.style.width = `${progressPercentValue}%`;
        console.log(`📊 Player ${index + 1}: Progress ${progressPercentValue.toFixed(1)}%`);
      }
    }
    
    // COMBINĂ TOATE ACTUALIZĂRILE
    function updateAll() {
      updateCurrentTime();
      updateProgress();
      updateButtonStates();
    }
    
    // SETEAZĂ DURATA TOTALĂ CÂND SE ÎNCARCĂ METADATELE
    audio.addEventListener('loadedmetadata', function() {
      console.log(`📊 Player ${index + 1}: Metadate încărcate`);
      updateTotalTime();
      updateAll();
    });
    
    // ACTUALIZEAZĂ LA FIECARE FRAME
    audio.addEventListener('timeupdate', updateAll);
    
    // CLICK PE PROGRESS BAR PENTRU A SĂRI
    if (progressBar) {
      progressBar.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        
        if (audio.duration && !isNaN(audio.duration)) {
          const newTime = pos * audio.duration;
          audio.currentTime = newTime;
          updateAll();
          console.log(`🎯 Player ${index + 1}: Sărit la ${formatTime(newTime)}`);
        }
      });
    }
    
    // BUTON START
    startBtn.addEventListener('click', function() {
      console.log(`▶️ Player ${index + 1}: Buton Start apăsat`);
      
      // Oprește toate celelalte player-e
      players.forEach((p, i) => {
        if (p !== player) {
          const otherAudio = p.querySelector('.audio-element');
          const otherStartBtn = p.querySelector('.start-btn');
          const otherPauseBtn = p.querySelector('.pause-btn');
          const otherStopBtn = p.querySelector('.stop-btn');
          
          if (otherAudio) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
          }
          
          if (otherStartBtn && otherPauseBtn && otherStopBtn) {
            otherStartBtn.disabled = false;
            otherStartBtn.classList.add('active');
            otherPauseBtn.disabled = true;
            otherPauseBtn.classList.remove('active');
            otherStopBtn.disabled = true;
            otherStopBtn.classList.remove('active');
          }
          
          p.classList.remove('active');
        }
      });
      
      // ÎNCEPE REDAREA
      audio.play().then(() => {
        console.log(`▶️ Player ${index + 1}: Redare începută`);
        player.classList.add('active');
        updateAll();
      }).catch(error => {
        console.error(`❌ Player ${index + 1}: Eroare la redare:`, error);
        
        if (error.name === 'NotAllowedError') {
          alert('Browser-ul a blocat redarea automată. Apasă din nou butonul Start.');
        }
      });
    });
    
    // BUTON PAUSE
    pauseBtn.addEventListener('click', function() {
      console.log(`⏸️ Player ${index + 1}: Buton Pause apăsat`);
      
      if (!audio.paused) {
        audio.pause();
        player.classList.remove('active');
        updateAll();
      }
    });
    
    // BUTON STOP
    stopBtn.addEventListener('click', function() {
      console.log(`⏹️ Player ${index + 1}: Buton Stop apăsat`);
      
      audio.pause();
      audio.currentTime = 0;
      player.classList.remove('active');
      updateAll();
    });
    
    // CÂND SE TERMINĂ MELODIA
    audio.addEventListener('ended', function() {
      console.log(`🎶 Player ${index + 1}: Melodie terminată`);
      audio.currentTime = 0;
      player.classList.remove('active');
      updateAll();
    });
    
    // GESTIONEAZĂ ERORILE
    audio.addEventListener('error', function() {
      console.error(`❌ Player ${index + 1}: Eroare audio:`, audio.error);
      currentTimeEl.textContent = "Eroare";
      totalTimeEl.textContent = "0:00";
      
      if (audio.error && audio.error.code === audio.error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
        console.error('Format audio nesuportat sau fișier inexistent.');
      }
    });
    
    // INITIALIZEAZĂ STARE BUTOANE
    updateButtonStates();
    
    // ÎNCEARCĂ SĂ OBȚII DURATA IMEDIAT
    if (audio.readyState >= 1) {
      updateTotalTime();
    }
    
    // ÎNCEARCĂ DIN NOU DUPĂ O SCURTĂ ÎNTÂRZIERE
    setTimeout(updateTotalTime, 500);
    setTimeout(updateTotalTime, 2000);
  });
  
  console.log('✅ Player-ele audio au fost inițializate cu succes!');
});