// Simulated parking slot logic
const maxSlots = 4;
let availableSlots = 4;

const slotsDisplay = document.getElementById('slotsLeft');
const enterBtn = document.getElementById('enterBtn');
const exitBtn = document.getElementById('exitBtn');

function updateDisplay() {
  slotsDisplay.textContent = availableSlots;
  if (availableSlots === 0) {
    slotsDisplay.style.color = '#ff4444';
  } else {
    slotsDisplay.style.color = '#00e676';
  }
}

enterBtn.addEventListener('click', () => {
  if (availableSlots > 0) {
    availableSlots--;
    updateDisplay();
    alert('Car entered. Gate opened and closed smoothly.');
  } else {
    alert('Parking Full! No available slots.');
  }
});

exitBtn.addEventListener('click', () => {
  if (availableSlots < maxSlots) {
    availableSlots++;
    updateDisplay();
    alert('Car exited. Gate opened and closed smoothly.');
  } else {
    alert('No cars in the parking lot to exit.');
  }
});

updateDisplay();
