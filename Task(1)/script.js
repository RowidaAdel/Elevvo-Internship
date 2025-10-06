document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check required fields
  if (!name || !email || !subject || !message) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Please fill in all fields',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    return;
  }

  // Check email format
  if (!emailPattern.test(email)) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Invalid email address',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    return;
  }

  // Success
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Form submitted successfully!',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  });

  this.reset();
});
