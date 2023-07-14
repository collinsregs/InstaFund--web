var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_view_employee = 'SELECT * FROM STAFF'



function view_employee(){
    return db_Connection.all (sql_view_employee,function(err,customers){
        if(err){
            console.log(err);
        }
        else
        console.log(JSON.stringify(customers));

    });
}
view_employee();

module.exports = view_employee;