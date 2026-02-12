// ===============================
// COUNTDOWN TIMER
// ===============================

// TODO: Update this date when registration deadline is finalized
// Format: YYYY-MM-DDTHH:MM:SS
const REGISTRATION_DEADLINE = new Date("2026-02-16T23:59:59").getTime();

const countdownElement = document.getElementById("countdown-timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = REGISTRATION_DEADLINE - now;

  if (distance <= 0) {
    countdownElement.textContent = "Registrations Closed";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days} Days ${hours}h ${minutes}m ${seconds}s`;
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
