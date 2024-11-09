// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode toggle functionality
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Fade-in effect for sections when scrolled into view
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    fadeInObserver.observe(section);
});

// Add event listeners for form validation
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert("All fields are required!");
        event.preventDefault();
    } else if (!validateEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

// Email validation function
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Dark mode toggle button (example, you can add this button in your HTML)
document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Toggle Dark Mode';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.bottom = '10px';
    darkModeButton.style.right = '10px';
    darkModeButton.style.padding = '10px';
    darkModeButton.addEventListener('click', toggleDarkMode);
    document.body.appendChild(darkModeButton);
});
