const db = require('./pgresdb.js');
const path = '../dummydata/dummydata.json';

const copyPlaces = () => {
  console.log('copying places');
  db.query(
    "copy places FROM '/Users/stevenpurn/Documents/HackReactor/SDC/reviews/dummydata/postgresData.csv' DELIMITER ',' CSV",
    (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    },
  );
}

const createTables = () => {
  // db.query(
  //   `CREATE TABLE IF NOT EXISTS places (
  //   id INT PRIMARY_KEY,
  //   name TEXT,
  //   price_level INT,
  //   neighborhood TEXT,
  //   city TEXT,
  //   street TEXT,
  //   rating NUMBER)`,
  //   (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(data);
  //   },
  // );

  // db.query(
  //   `CREATE TABLE IF NOT EXISTS reviews (
  //   id INT PRIMARY_KEY,
  //   author_name TEXT,
  //   profile_photo_url TEXT,
  //   rating INT,
  //   relative_time_description TEXT,
  //   text TEXT,
  //   place_id INT)`,
  //   (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(data);
  //   },
  // );
  console.log('copying reviews');
  db.query(
    "copy reviews FROM '/Users/stevenpurn/Documents/HackReactor/SDC/reviews/dummydata/postgresReviews.csv' DELIMITER ',' CSV",
    (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
      copyPlaces();
    },
  );
};

// setTimeout(() => {
//   createTables();
// }, 5000);

createTables();
