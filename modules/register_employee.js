var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_register_staff = 'INSERT INTO STAFF (National_Id, Full_Name, Phone_Number) VALUES (?, ?, ?)'
var id, first_name, last_name, gender;

function register_staff(National_Id,Full_Name,Phone_Number){

    var data=[National_Id,Full_Name,Phone_Number];
db_Connection.serialize(()=>{
    db_Connection.run(sql_register_staff,data,function(err){
        if (err) {
            console.error(err);
          } else {
            console.log('Data inserted successfully. Row ID:', this.lastID);
          }
    });

    });
  }

  register_staff(1100002,'foo bar', 72505823);
db_Connection.close();