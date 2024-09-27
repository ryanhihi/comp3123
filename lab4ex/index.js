const express = require('express');
const app = express();
const SERVER_PORT = process.env.PORT || 3001;

app.use(express.json());

// Route for GET request on '/'
app.get('/', (req, res) => {
    res.send('Hello Lab4ex');
});

//A GET request to /hello that returns "Hello Express JS".
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

//A GET request to /user with query parameters for firstname and lastname.

app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Ryan';
    const lastname = req.query.lastname || 'Tran';

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

//A POST request to /user with path parameters for firstname and lastname.

// A POST request to /user with path parameters for firstname and lastname.
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({
        firstname: firstname,
        lastname: lastname
    });
});


// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

//GET Request: https://comp3123.vercel.app/user?firstname=fn&lastname=ln
//POST Request: https://comp3123.vercel.app/user/Ryan/Tran