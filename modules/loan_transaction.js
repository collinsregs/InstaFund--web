// const db = require("./db_connect")
// const mobileMoney=require("./mpesa-api-connect")
const db = require("./db_connect")
const penalties = require("./penalties")
const oneDayMilliseconds=24*60*60*1000
const oneWeekMilliseconds=7*oneDayMilliseconds
var runWhen=2*1000

const sql_update_loan_amounts= 'SELECT * FROM LOANS WHERE STATUS ="APPROVED"'
const sql_update_loan_penalties='UPDATE LOANS SET Amount_Penalties= ? WHERE Loan_Number=?'
const sql_update_weekly_due="UPDATE LOANS SET Amount_weekly_Due=? WHERE Loan_Number=?"

function get_pending_loans(){
    db.all(sql_update_loan_amounts,[],(err,loans)=>{
        
        if(err){
            console.log(err)
            return
        }
        // console.log(loans)
        let approval_dateValue=new Date(loan.Approval_Date).getTime()
            let dateValue=new Date().getTime()
            if((approval_dateValue+oneWeekMilliseconds)>=dateValue){
        loans.forEach(loan => {
            var updatedPenalties =penalties(loan.Amount_Weekly_instalments,loan.Amount_weekly_Due,loan.Amount_Penalties,)
            db.run(sql_update_loan_penalties,[updatedPenalties,loan.Loan_Number])
            
        
        });}
    })

}
function update_weekly_due(){
    db.all(sql_update_loan_amounts,[],(err,loans)=>{
        if(err){
            console.log(err)
            return
        }
        loans.forEach(loan => {
            let approval_dateValue=new Date(loan.Approval_Date).getTime()
            let dateValue=new Date().getTime()
            if((approval_dateValue+oneWeekMilliseconds)>=dateValue){
                db.run(sql_update_weekly_due,[loan.Amount_Weekly_instalments,loan.Loan_Number])
            }
        })

    })
}
function startInterval(){
    setInterval(() => {
    get_pending_loans()
    update_weekly_due()
},oneDayMilliseconds);}
module.exports = startInterval

