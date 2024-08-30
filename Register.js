document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Here you would typically send the data to your server to create the new account
    // For this example, we'll just simulate a successful registration
    alert("Registration successful! Please log in.");

    // Redirect to login page
    window.location.href = "index.html";
});
