// Hardcoded credentials (In real scenarios, this should be handled on the server-side)
const validUsername = "user";
const validPassword = "password";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check
    if (username === validUsername && password === validPassword) {
        // Redirect to the secure page
        window.location.href = "secure.html";
    } else {
        alert("Invalid username or password.");
    }
});
