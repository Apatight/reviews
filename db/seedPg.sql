CREATE DATABASE apatight IF NOT EXISTS;

\connect apatight;

CREATE TABLE IF NOT EXISTS places (
  place_id INT PRIMARY KEY,
  name TEXT,
  price_level INT,
  neighborhood TEXT,
  city TEXT,
  street TEXT,
  rating DECIMAL
);

CREATE TABLE IF NOT EXISTS reviews (
  id INT PRIMARY KEY,
  author_name TEXT,
  profile_photo_url TEXT,
  rating INT,
  relative_time_description TEXT,
  text TEXT,
  place_id INT,
  FOREIGN KEY (place_id) REFERENCES places
);

copy places FROM '/Users/stevenpurn/Documents/HackReactor/SDC/reviews/dummydata/postgresData.csv' DELIMITER '|' CSV;

copy reviews FROM '/Users/stevenpurn/Documents/HackReactor/SDC/reviews/dummydata/postgresReviews.csv' DELIMITER '|' CSV;