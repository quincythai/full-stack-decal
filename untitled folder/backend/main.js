// Import Express library
const express = require('express');

const cors = require('cors');
app.use(cors());

// Initialize app
const app = express();

const bookDictionary = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  }
];


// Get path request and send response with text
app.get('/', (req, res) => {
  res.send('Hi, your request has been receieved');
})

// Listen on port 2000
app.listen(2000, () => {
  console.log('Listening at http://localhost:2000');
})