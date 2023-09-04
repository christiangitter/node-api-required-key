require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const array = [
    {
        "id": 1,
        "name": "John",
        "age": 23
    },
    {
        "id": 2,
        "name": "Smith",
        "age": 25
    },
    {
        "id": 3,
        "name": "Jane",
        "age": 21
    }
];



// Define a POST route that expects a 'password' key in the request body
app.post('/', (req, res) => {

    // Check if the required 'password' key exists in the request body
    if (!req.body.hasOwnProperty('key')) {
        return res.status(400).json({ error: 'The key is required in the request body' });
    }

    // Access the 'password' key in the request body
    const key = req.body.key;
    //console.log(`The key sent is "${key}"`);

    // Now you can validate or use the password as needed
    if (key !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Invalid key' });
    }

    // For demonstration, we'll just respond with a success message
    res.json(array);
});


app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});