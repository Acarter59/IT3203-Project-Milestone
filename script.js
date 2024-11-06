// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let formStatus = document.getElementById("formStatus");

    if (name === "" || email === "") {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "red";
    } else {
        formStatus.textContent = "Form submitted successfully!";
        formStatus.style.color = "green";
    }
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send('Thank you for contacting us! Your message has been received.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});

