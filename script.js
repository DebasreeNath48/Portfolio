document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector('.gallery');

  window.scrollLeft = function() {
    gallery.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  window.scrollRight = function() {
    gallery.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  // Handle contact form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show an alert with the user's input
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Optionally, reset the form
    this.reset();
  });
});
