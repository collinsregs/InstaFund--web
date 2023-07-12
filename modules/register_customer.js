var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_register_customer = 'INSERT INTO CUSTOMER (National_Id, First_Name, Last_Name, Gender) VALUES (?, ?, ?, ?)'
var id, first_name, last_name, gender;

function register_customer(){

    var data=[11001100,'collins','red', 'male'];
db_Connection.serialize(()=>{
    db_Connection.run(sql_register_customer,data,function(err){
        if (err) {
            console.error(err);
          } else {
            console.log('Data inserted successfully. Row ID:', this.lastID);
          }
    });

    });
  }

  register_customer();
db_Connection.close();