const { Pool, Client } = require('pg');

const HOST = process.env.POSTGRES_HOST || '127.0.0.1';
const PORT = process.env.POSTGRES_PORT || 5432;
const DATABASE = process.env.POSTGRES_DB || 'apatight';
const USER = process.env.POSTGRES_USER || 'postgres';

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  port: PORT,
});

const insertIntoDatabase = (query, values, cb) => {
  pool.query(query, values)
    .then((res) => {
      cb(null, res);
    })
    .catch((e) => {
      cb(e, null);
    });
};

const queryDatabase = (query, cb) => {
  pool.query(query)
    .then((res) => {
      cb(null, res);
    })
    .catch((e) => {
      cb(e, null);
    });
};

const client = new Client({
  user: USER,
  host: HOST,
  database: DATABASE,
  port: PORT,
});
client.connect();

module.exports.query = queryDatabase;
module.exports.insert = insertIntoDatabase;
