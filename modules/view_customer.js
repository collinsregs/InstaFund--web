var db_Connection = require("./db_connect.js");
console.log('the database has been connected');
console.log(db_Connection);

const sql_view_customers = 'SELECT * FROM CUSTOMER'



function view_customers(){
    return new Promise((resolve, reject) => {
        db_Connection.all(sql_view_customers, function (err, customers) {
            if (err) {
              reject(err);
            } else {
              resolve(customers);
            }
    })
})}

module.exports = view_customers;
