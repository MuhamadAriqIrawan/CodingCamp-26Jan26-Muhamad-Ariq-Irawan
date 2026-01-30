document.addEventListener("DOMContentLoaded", function() {
    welcomeMessage();
});

// Welcoming Speech (Instruksi 4)
function welcomeMessage() {
    let name = prompt("Welcome! Silakan masukkan nama Anda:");
    if (!name || name.trim() === "") name = "Guest";
    document.getElementById("welcome-speech").innerText = `Hello ${name}, Welcome To Our Website`;
}

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

// Form Submission & Validation (Instruksi 5)
const messageForm = document.getElementById("messageForm");
if (messageForm) {
    messageForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get Input Values
        const name = document.getElementById("sender-name").value;
        const dob = document.getElementById("birth-date").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById("message-text").value;
        const time = new Date().toLocaleString();

        // Show value in HTML Summary
        document.getElementById("res-time").innerText = time;
        document.getElementById("res-name").innerText = name;
        document.getElementById("res-dob").innerText = dob;
        document.getElementById("res-gender").innerText = gender;
        document.getElementById("res-msg").innerText = message;

        alert("Pesan berhasil dikirim!");
    });
}