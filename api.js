const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


// Define a POST route that expects a 'password' key in the request body
app.post('/', (req, res) => {

    // Check if the required 'password' key exists in the request body
    if (!req.body.hasOwnProperty('key')) {
        return res.status(400).json({ error: 'The key is required in the request body' });
    }

    // Access the 'password' key in the request body
    const password = req.body.password;
    console.log(`The key sent is "${password}"`);

    // Now you can validate or use the password as needed
    // Replace this with your actual password validation logic

    // For demonstration, we'll just respond with a success message
    res.json({ message: 'Login request received successfully' });
});


app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});