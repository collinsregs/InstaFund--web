const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/instafund_database.db');
console.log("the database is being connected");
console.log(db);


const sql = 'SELECT sqlite_version() AS version';
db.get(sql, [], (err, row) => {
    if (err) {
      console.error('Error retrieving SQLite version:', err.message);
    } else {
      console.log('SQLite version:', row.version);
    }})

module.exports = db;