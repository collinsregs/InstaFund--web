var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_view_customers = 'SELECT * FROM CUSTOMER'



function view_customers(){
    return db_Connection.all (sql_view_customers,function(err,customers){
        if(err){
            console.log(err);
        }
        else
        console.log(JSON.stringify(customers));

    });
}
view_customers();

module.exports = view_customers;