// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');
});

// Form Validation for Contact Form
const form = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        formResponse.textContent = "Please fill out both fields.";
    } else {
        formResponse.textContent = "Form submitted successfully!";
        formResponse.style.color = "green";
        // You can add more functionality like sending data to the server here.
    }
});
