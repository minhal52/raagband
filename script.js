
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}


// whatsapp message
    document.addEventListener('DOMContentLoaded', function () {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const eventNameInput = document.getElementById('eventName');
        const eventDateInput = document.getElementById('eventDate');
        const eventPlaceInput = document.getElementById('eventPlace');
        const bookNowBtn = document.getElementById('bookNowBtn');

        const inputs = [nameInput, phoneInput, emailInput, eventNameInput, eventDateInput, eventPlaceInput];

        function checkInputs() {
            const allFilled = inputs.every(input => input.value.trim() !== '');
            bookNowBtn.disabled = !allFilled;
        }

        inputs.forEach(input => {
            input.addEventListener('input', checkInputs);
        });

        bookNowBtn.addEventListener('click', function () {
            const whatsappNumber = '+918050024611'; // Updated WhatsApp number
            const message = `Hi, I'm interested in booking an event. Here are my details:
Name: ${nameInput.value}
Phone: ${phoneInput.value}
Email: ${emailInput.value}
Event Type: ${eventNameInput.value}
Event Date: ${eventDateInput.value}
Venue: ${eventPlaceInput.value}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappLink, '_blank');
        });
    });

