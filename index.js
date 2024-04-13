// Define total number of seats and initialize an array to track seat availability
const totalSeats = 20;
let availableSeats = new Array(totalSeats).fill(true); // true indicates seat is available

// Function to display available seats
function displayAvailableSeats() {
  const seatContainer = document.getElementById('seatContainer');
  seatContainer.innerHTML = ''; // Clear previous content

  for (let i = 0; i < totalSeats; i++) {
    const seat = document.createElement('div');
    seat.className = 'seat';
    seat.textContent = i + 1;
    seat.style.backgroundColor = availableSeats[i] ? 'green' : 'red';
    seat.addEventListener('click', () => bookSeat(i));
    seatContainer.appendChild(seat);
  }
}

// Function to book a seat
function bookSeat(seatIndex) {
  if (availableSeats[seatIndex]) {
    availableSeats[seatIndex] = false;
    displayAvailableSeats();
    alert(`Seat ${seatIndex + 1} booked successfully!`);
  } else {
    alert('Sorry, this seat is already booked.');
  }
}

// Initial display of available seats
displayAvailableSeats();
