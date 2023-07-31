var db_Connection = require("./db_connect.js");


const sql_register_customer = 'INSERT INTO CUSTOMER (National_Id, First_Name, Gender) VALUES (?, ?, ?)'


function register_customer(id,first_name,gender) {

    var data=[id,first_name,gender];
db_Connection.serialize(()=>{
    db_Connection.run(sql_register_customer,data,function(err){
        if (err) {
          console.log("an error occured");
            console.error(err);
            return err;
          } else {
            console.log('Data inserted successfully. Row ID:', this.lastID);
            return null;
          }
    });

    });
    db_Connection.close();
}


  module.exports = register_customer;
