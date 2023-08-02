const db= require("./db_connect");
const sql_get_loan_amounts='SELECT Amount_Weekly_Due , Amount_Balance ,Loan_Number FROM LOANS WHERE Status ="APPROVED" AND Customer_Id = ? '
const sql_update_loan_amounts='UPDATE LOANS SET Amount_Weekly_Due=? ,Amount_Balance=? WHERE Loan_Number=?'
function update_on_Mpesa(amount,accountNumber){
    console.log(accountNumber)
db.all(sql_get_loan_amounts,accountNumber,(err,loans)=>{
    if(err){

        console.log(err);
        return
    }
    console.log(loans.length)
    console.log(loans)
loans.forEach(loan => {
    
    var Old_Amount_Weekly_Due=loan.Amount_weekly_Due
    console.log(Old_Amount_Weekly_Due+" this is the old weekly amount")
    var New_Amount_Weekly_Due=Old_Amount_Weekly_Due-amount
    console.log(New_Amount_Weekly_Due +" this is the new weekly amount")
    var Old_Amount_Balance=loan.Amount_Balance
    console.log(Old_Amount_Balance +" this is the old balance amount")
    var New_Amount_Balance=Old_Amount_Balance -amount
    console.log(New_Amount_Balance +" this is the new balance amount")
db.run(sql_update_loan_amounts,[New_Amount_Weekly_Due,New_Amount_Balance,loan.Loan_Number],)
console.log("amount updated")
});
})
}
module.exports =update_on_Mpesa