const mongoose = require('mongoose');

// const mongoUrlDocker = 'mongodb://database/apateez-reviews';
const mongoUrl = 'mongodb://localhost/apatight';

mongoose.connect(mongoUrl); // Try localhost first

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open');
});

// mongoose.connection.on('error', (err) => {
//   console.log(`Mongoose default connection error: ${err}`);
//   mongoose.connect(mongoUrlDocker);
// });

const RestaurantSchema = mongoose.Schema({
  place_id: {
    type: Number,
    unique: true,
  },
  name: String,
  price_level: Number,
  neighborhood: String,
  reviews: [
    [],
  ],
  city: String,
  street: String,
  rating: Number,
});

const Restaurant = mongoose.model('restaurant', RestaurantSchema);

const findOne = (id) => {
  console.log('find one db triggered with ', id);
  return Restaurant.find({ place_id: id });
};

const insertOne = (store, callback) => {
  Restaurant.create(store, callback);
};

const clearDb = (cb) => {
  Restaurant.remove({}, cb);
};


exports.findOne = findOne;
exports.insertOne = insertOne;
exports.clearDb = clearDb;
