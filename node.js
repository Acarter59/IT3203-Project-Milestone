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
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    res.send('Thank you for contacting us! Your message has been received.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
