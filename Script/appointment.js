const form = document.getElementById('booking-form');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const providerSelect = document.getElementById('provider');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate input
    if (!dateInput.value || !timeInput.value || !providerSelect.value) {
        alert('Please fill out all fields');
        return;
    }

    // Send booking request to server (or simulate a server response)
    // For simplicity, we'll just log the booking details to the console
    console.log(`Booking confirmed: Date=${dateInput.value}, Time=${timeInput.value}, Provider=${providerSelect.value}`);
});