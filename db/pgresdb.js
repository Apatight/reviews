const { Pool, Client } = require('pg');

const HOST = '13.56.229.153';
const PORT = 5432;
const DATABASE = process.env.POSTGRES_DB || 'apatight';
const USER = process.env.POSTGRES_USER || 'postgres';
const PASSWORD = 'postgres';

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
  port: PORT,
});

const insert = (query, values, cb) => {
  pool.query(query)
    .then(res => cb(null, res))
    .catch(e => cb(e, null));
};

const query = (input, cb) => {
  pool.query(input)
    .then(res => cb(null, res))
    .catch(e => cb(e, null));
};

const findOnePlace = id => pool.query(`select * from places where place_id = ${id}`);

const findReviews = id => pool.query(`select * from reviews where place_id = ${id}`);

const client = new Client({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
  port: PORT,
});
client.connect();

module.exports = {
  query,
  insert,
  findOnePlace,
  findReviews,
};
