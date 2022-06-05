const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  try {
    const event = req.body;

    axios.post('http://localhost:4000/events', event).catch((err) => {
      console.log(err.message);
    });
    axios.post('http://localhost:4001/events', event).catch((err) => {
      console.log(err.message);
    });
    axios.post('http://localhost:4002/events', event).catch((err) => {
      console.log(err.message);
    });
    axios.post('http://localhost:4003/events', event).catch((err) => {
      console.log(err.message);
    });

    res.send({ status: 'OK' });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4005, () => {
  console.log('Event bus listening on port 4005!');
});
