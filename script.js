// Part 1: Light/Dark Mode Toggle
// This function toggles between light and dark mode.
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Change button text depending on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
});

// Part 2: Click Counter Game
// This function increases the click count every time the button is clicked.
const clickButton = document.getElementById('clickButton');
const clickCounter = document.getElementById('clickCounter');
let count = 0;

clickButton.addEventListener('click', function() {
    count++;
    clickCounter.textContent = count;
});

// Part 3: Form Validation
// This function validates the form inputs (name, email, password) before submission.
const form = document.getElementById('signupForm');
const formError = document.getElementById('formError');

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle validation manually
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    formError.textContent = '';

    // Validate inputs
    if (name === '' || email === '' || password === '') {
        formError.textContent = 'All fields must be filled out.';
    } else if (!validateEmail(email)) {
        formError.textContent = 'Please enter a valid email address.';
    } else if (password.length < 6) {
        formError.textContent = 'Password must be at least 6 characters long.';
    } else {
        formError.textContent = 'Form successfully submitted!';
        formError.style.color = 'green';
    }
}

// Email validation function using regular expression
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
