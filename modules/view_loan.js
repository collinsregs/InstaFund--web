var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_view_loan = 'SELECT * FROM LOANS'



function view_loan(){
    return new Promise((resolve, reject) => {
        db_Connection.all(sql_view_loan, function (err, loans) {
            if (err) {
              reject(err);
            } else {
              resolve(loans);
            }
    })
})
}
view_loan();

module.exports = view_loan;