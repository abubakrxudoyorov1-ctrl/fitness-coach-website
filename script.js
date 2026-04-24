// script.js

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        handleSubmit();
    }
});

function validateForm() {
    let valid = true;
    if (emailInput.value === '' || !validateEmail(emailInput.value)) {
        valid = false;
        alert('Please enter a valid email.');
    }
    if (messageInput.value === '') {
        valid = false;
        alert('Please enter a message.');
    }
    return valid;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function handleSubmit() {
    // Handle the form submission logic 
    alert('Form submitted successfully!');
}

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Interactive Elements
const interactiveItems = document.querySelectorAll('.interactive');
interactiveItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
