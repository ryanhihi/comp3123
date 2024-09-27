const express = require('express');
const app = express();
const SERVER_PORT = process.env.PORT || 3000;  // Ensure PORT is uppercase, as it's a common standard.

// Route for GET request on '/'
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Route for POST request on '/about'
app.post('/about', (req, res) => {
    res.send('About us');
});

// Route for POST request on '/'
app.post('/', (req, res) => {
    res.send('POST - Hello world');
});

// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
