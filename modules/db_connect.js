const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/instafund_database.db');
console.log("the database is being connected");

module.exports = db;