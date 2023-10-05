const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 3000;
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/media', express.static(path.join(__dirname, 'media')));

// Define your routes
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/lifts', (req, res) => {
  res.sendFile('lifts.html', { root: __dirname });
});

app.use(express.json()); // Parse JSON requests

app.post('/submit', (req, res) => {
  // Get the form data from the request
  const name = req.body.name;
  const email = req.body.email;

  // Format the data
  const formData = `Name: ${name}, Email: ${email}\n`;

  // Write the data to a text file
  fs.appendFile('public/submissions.txt', formData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('Data written to file');
      res.status(200).send('Data submitted successfully');
    }
  });
});

app.get('/submissions', (req, res) => {
  fs.readFile('public/submissions.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
    } else {
      // Split the content into an array of lines
      const submissions = data.split('\n').filter(line => line.trim() !== '');

      // Send the lines as JSON response
      res.json(submissions);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});