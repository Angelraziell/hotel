function showReservationForm() {

  const roomType = document.getElementById('roomType').value;

  const numNights = document.getElementById('numNights').value;

  
  sessionStorage.setItem('roomType', roomType);

  sessionStorage.setItem('numNights', numNights);

  
  window.location.href = 'reservation-form.html';

}


function confirmBooking() {

  const roomType = sessionStorage.getItem('roomType');

  const numNights = sessionStorage.getItem('numNights');

  const fullName = document.getElementById('fullName').value;

  const email = document.getElementById('email').value;

  const phone = document.getElementById('phone').value;


  sessionStorage.setItem('fullName', fullName);

  sessionStorage.setItem('email', email);

  sessionStorage.setItem('phone', phone);


  window.location.href = 'booking-confirmation.html';

}


function displayConfirmationDetails() {

  const roomType = sessionStorage.getItem('roomType');

  const numNights = sessionStorage.getItem('numNights');

  const fullName = sessionStorage.getItem('fullName');

  const email = sessionStorage.getItem('email');

  const phone = sessionStorage.getItem('phone');


  const roomTypeConfirmation = document.getElementById('roomTypeConfirmation');

  const numNightsConfirmation = document.getElementById('numNightsConfirmation');

  const fullNameConfirmation = document.getElementById('fullNameConfirmation');

  const emailConfirmation = document.getElementById('emailConfirmation');

  const phoneConfirmation = document.getElementById('phoneConfirmation');

  roomTypeConfirmation.innerHTML = `Room Type: ${roomType}`;
  numNightsConfirmation.innerHTML = `Number of Nights: ${numNights}`;
  fullNameConfirmation.innerHTML =  `Full Name: ${fullName}`;
emailConfirmation.innerHTML = `Email: ${email}`;
phoneConfirmation.innerHTML = `Phone Number: ${phone}`;
}

displayConfirmationDetails();
