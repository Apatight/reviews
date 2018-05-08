const { Pool, Client } = require('pg');

const HOST = '127.0.0.1';
const PORT = 5432;
const DATABASE = process.env.POSTGRES_DB || 'apatight';
const USER = process.env.POSTGRES_USER || 'postgres';

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  port: PORT,
});

const insertIntoDatabase = (query, values, cb) => {
  pool.query(query)
    .then(res => cb(null, res))
    .catch(e => cb(e, null));
};

const queryDatabase = (query, cb) => {
  pool.query(query)
    .then(res => cb(null, res))
    .catch(e => cb(e, null));
};

const findOnePlace = id => pool.query(`select * from places where place_id = ${id}`);

const findReviews = id => pool.query(`select * from reviews where place_id = ${id}`);

const client = new Client({
  user: USER,
  host: HOST,
  database: DATABASE,
  port: PORT,
});
client.connect();

module.exports.query = queryDatabase;
module.exports.insert = insertIntoDatabase;
module.exports.findOnePlace = findOnePlace;
module.exports.findReviews = findReviews;
