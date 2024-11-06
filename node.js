const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a POST route to handle form submissions from contact.html
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Log the form data to the console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Respond with a thank-you message
    res.send('Thank you for contacting us! Your message has been received.');
});

// Start the server and listen on a specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
