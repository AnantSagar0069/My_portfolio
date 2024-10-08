function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

const btn = document.getElementById('button'); //send message button
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_0q28umd';
   const templateID = 'template_dps91zb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message sent successfully!!');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert('Failed to send the message. Please try again.');
      alert(JSON.stringify(err));
    });
});

