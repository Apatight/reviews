require('newrelic');
const redis = require('redis');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const client = redis.createClient();
const app = express();
const port = 3003;
const Stores = require('./../db/models/store.js');

const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/restaurants', express.static(path.join(__dirname, '../public')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/restaurants/:id', (req, res) => {
  const placeId = req.params.id;
  client.get(placeId, (err, data) => {
    if (err) {
      throw err;
    }

    if (data) {
      res.send(data);
    } else {
      Stores.findOnePlace(placeId)
        .then((place) => {
          console.log(place);
          client.set(placeId, JSON.stringify(place.rows[0]));
          res.send(place.rows[0]);
        })
        .catch((error) => {
          throw error;
        });
    }
  });
});

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const placeId = req.params.id;
  client.get(`${placeId}-reviews`, (err, data) => {
    if (err) {
      throw err;
    }

    if (data) {
      res.send(data);
    } else {
      Stores.findReviews(placeId)
        .then((reviews) => {
          console.log(reviews);
          client.setex(`${placeId}-reviews`, JSON.stringify(reviews.rows));
          res.send(reviews.rows);
        })
        .catch((error) => {
          throw error;
        });
    }
  });
});

app.listen(port, () => {
  // console.log(`server running at PORT: ${port}`);
});
