// Mobile menu

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Contact form

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("formMessage");

    message.textContent =
        `Thank you ${name}! Your enquiry has been submitted.`;

    event.target.reset();
}