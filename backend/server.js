const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Registration API!');
});

app.post('/register', (req, res) => {
  console.log('Received registration:', req.body);
  const newUser = req.body;

  // Read existing data
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File does not exist, initialize with empty array
        return writeData([], newUser, res);
      }
      return res.status(500).send('Error reading data file');
    }

    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (e) {
      return res.status(500).send('Error parsing data file');
    }

    jsonData.push(newUser);
    writeData(jsonData, newUser, res);
  });
});

const writeData = (data, newUser, res) => {
  fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2), (err) => {
    if (err) {
      return res.status(500).send('Error writing to data file');
    }
    res.status(201).send('User registered successfully');
  });
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
