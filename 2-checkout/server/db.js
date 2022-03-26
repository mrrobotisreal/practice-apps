const mysql = require("mysql2");
const mysqlPromise = require('mysql2-promise');
const Promise = require("bluebird");
const crypto = require('crypto');

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .catch((err) => console.log(err));

const createHash = (data, salt = '') => {
  let shasum = crypto.createHash('sha256');
  // salt = crypto.randomBytes(32).toString('hex');
  shasum.update(data + salt);
  return shasum.digest('hex');
};

const compareHash = (attempted, stored, salt) => {
  return stored === createHash(attempted);
};

const saveOne = (data, cb = () => {}) => {
  let password = createHash(data.password)
  db.connectAsync()
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `INSERT INTO ${data.form} (name, email, password) VALUES (?, ?, ?)`, [data.name, data.email, password]
    )
  )
  .catch((err) => console.log(err));
}

const saveTwo = (data, cb = () => {}) => {
  db.connectAsync()
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `INSERT INTO ${data.form} (addressLineOne, addressLineTwo, city, state, zip, phone) VALUES (?, ?, ?, ?, ?, ?)`, [data.add1, data.add2, data.city, data.state, data.zip, data.phone]
    )
  )
  .catch((err) => console.log(err));
}

module.exports = db;
module.exports.saveOne = saveOne;
module.exports.saveTwo = saveTwo;
