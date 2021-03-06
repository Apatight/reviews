const db = require('./pgresdb.js');

const queries = [
  `CREATE TABLE IF NOT EXISTS places (
    place_id INT PRIMARY KEY,
    name TEXT,
    price_level INT,
    neighborhood TEXT,
    city TEXT,
    street TEXT,
    rating DECIMAL
  )`,
  `CREATE TABLE IF NOT EXISTS reviews (
    id INT PRIMARY_KEY,
    author_name TEXT,
    profile_photo_url TEXT,
    rating INT,
    relative_time_description TEXT,
    text TEXT,
    place_id INT,
    FOREIGN KEY (place_id) REFERENCES places
  )`,
  "copy places FROM '/Users/stevenpurn/Documents/HackReactor/SDC/reviews/dummydata/postgresData.csv' DELIMITER ',' CSV",
  "copy reviews FROM '/Users/stevenpurn/Documents/HackReactor/SDC/reviews/dummydata/postgresReviews.csv' DELIMITER ',' CSV",
];

const runQueries = (index) => {
  db.query(queries[index], (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log(res);
      if (index < queries.length - 1) {
        runQueries(index + 1);
      }
    }
  });
};

runQueries();
