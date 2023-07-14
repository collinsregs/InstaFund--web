var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_view_loan = 'SELECT * FROM LOANS'



function view_loan(){
    return db_Connection.all (sql_view_loan,function(err,customers){
        if(err){
            console.log(err);
        }
        else
        console.log(JSON.stringify(customers));

    });
}
view_loan();

module.exports = view_loan;