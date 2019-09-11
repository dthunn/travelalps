// Listen for form submit
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show alert
  document.querySelector('.message').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.message').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contact-form').reset();
});
