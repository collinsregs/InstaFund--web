var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_view_employee = 'SELECT * FROM STAFF'



function view_employee(){
    return new Promise((resolve, reject) => {
        db_Connection.all(sql_view_employee, function (err, employee) {
            if (err) {
              reject(err);
            } else {
              resolve(employee);
            }
    })
})
}
view_employee();

module.exports = view_employee;