var db_Connection = require("./db_connect.js");
console.log(db_Connection);

const sql_loan_application = 'INSERT INTO LOANS (Customer_Id, Credit_Officer_Id,  Guarantor_1_Id,Category,Amount_Total_Applied,Status) VALUES (?, ?, ?, ?,?,?)'


function apply_loan(Customer_Id,Credit_Officer_Id,Guarantor_1_Id,Category,Total_Amount_Applied,status){
var date_unformatted = new Date();
var day= date_unformatted.getDate();
var month= date_unformatted.getMonth();
var year= date_unformatted.getFullYear();
var date= `${year}/${month}/${day}` ;

    var data=[Customer_Id,Credit_Officer_Id,Guarantor_1_Id,Category,Total_Amount_Applied,status];
    console.log(data)
db_Connection.serialize(()=>{
    db_Connection.run(sql_loan_application,data,function(err){
        if (err) {
            console.error(err);
          } else {
            console.log('Data inserted successfully. Row ID:', this.lastID);
          }
    });

    });
    // db_Connection.close();
}
module.exports = apply_loan;
