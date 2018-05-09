const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3003;
const Stores = require('./../db/pgresdb.js');

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
  Stores.findOnePlace(placeId)
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      throw err;
    });
});

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const placeId = req.params.id;
  Stores.findReviews(placeId)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(port, () => {
  // console.log(`server running at PORT: ${port}`);
});
