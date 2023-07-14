var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_register_customer = 'INSERT INTO CUSTOMER (National_Id, First_Name, Last_Name, Gender) VALUES (?, ?, ?, ?)'


function register_customer(id,first_name,last_name,gender) {

    var data=[id,first_name,last_name,gender];
db_Connection.serialize(()=>{
    db_Connection.run(sql_register_customer,data,function(err){
        if (err) {
            console.error(err);
          } else {
            console.log('Data inserted successfully. Row ID:', this.lastID);
          }
    });

    });
    db_Connection.close();
}

register_customer(10,'col','bar','male');
  // module.exports = register_customer(id, first_name,last_name,gender);
