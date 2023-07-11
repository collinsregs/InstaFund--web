const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/instafund_database.db');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sql_register_customer = 'INSERT INTO CUSTOMER (National_Id, First_Name, Last_Name, Gender) VALUES (?, ?, ?, ?)'
var id, first_name, last_name, gender;

function register_customer(callback){
    rl.question('Enter ID number: ', (id) => {
        rl.question('Enter first name: ', (first_name) => {
          rl.question('Enter last name: ', (last_name) => {
            rl.question('Enter gender: ', (gender) => {
              rl.close();

    var data=[id,first_name,last_name, gender];
db.serialize(()=>{
    db.run(sql_register_customer,data,function(err){
        if (err) {
            console.error(err);
          } else {
            console.log('Data inserted successfully. Row ID:', this.lastID);
          }
    });

    });
            })
          })
        })
    })
}

register_customer((err)=>{
    if (err) {
        console.error('Error registering customer:', err);
      } else {
        console.log('Customer registration complete.');
      }
});