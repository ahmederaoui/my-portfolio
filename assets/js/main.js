AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Get form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('input[placeholder="Enter your name"]');
const emailInput = document.querySelector('input[placeholder="Enter your email"]');
const subjectInput = document.querySelector('input[placeholder="Enter subject"]');
const messageInput = document.querySelector('textarea[placeholder="Enter your message"]');
const submitBtn = document.querySelector('button[type="submit"]');

// Add submit event listener
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Validate form inputs
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value === '') {
    alert('Please enter your email address.');
    return;
  }

  if (subjectInput.value === '') {
    alert('Please enter a subject for your message.');
    return;
  }

  if (messageInput.value === '') {
    alert('Please enter a message.');
    return;
  }

  // Send email
  const recipientEmail = 'ahmederaoui1@gmail.com'; // Change to your own email address
  const emailSubject = `${nameInput.value} - ${subjectInput.value}`;
  const emailBody = `From: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`;
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  window.location.href = mailtoLink;
});
