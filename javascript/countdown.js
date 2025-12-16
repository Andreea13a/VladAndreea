function updateAnnualCountdown() {
  const countdownElements = document.querySelectorAll(".countdown");

  countdownElements.forEach(el => {
    const month = parseInt(el.dataset.month); // 1-12
    const day = parseInt(el.dataset.day);

    const now = new Date();
    let year = now.getFullYear();

    // Creează data evenimentului pentru anul curent
    let eventDate = new Date(year, month - 1, day, 0, 0, 0);

    // Dacă evenimentul a trecut, îl setează pentru anul următor
    if (eventDate < now) {
      eventDate.setFullYear(year + 1);
    }

    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    el.textContent = `${days}z ${hours}h ${minutes}m ${seconds}s`;
  });
}

// Actualizează la fiecare secundă
setInterval(updateAnnualCountdown, 1000);
updateAnnualCountdown();
