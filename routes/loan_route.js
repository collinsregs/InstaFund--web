const express = require("express");
const router = express.Router();

const view_loan=require("../modules/view_loan");
const  register_loan=require("../modules/loan_application");
const view_pending_loan=require("../modules/view_pending_loans");


router.get("/", get_loans,(req,res)=>{
    try{
        
    
        res.render("view-loans", {loans: res.locals.loans})
        }
        catch(err){
            console.log(res.locals.loans)
            console.log(err);
            console.log(err.message);
        }
})
// router.get("/approveLoans",get_pending_loans,(req,res)=>{
//     try{
//         console.log("gettingloans");
//         res.render("approve-loans", {loans:res.locals.loans})
//     }
//     catch(err){
//         console.log(err)
//     }
// })

router.get("/new", (req,res)=>{
    // res.render("register-loans")
    res.render('register-loans')
})
router.post("/new/submit", post_loan,(req,res)=>{
    try{
        res.redirect("/loans/")
    }
    catch(err){
        console.log(err)
    }    
})

router.get("/:id", (req,res)=>{
    console.log(req.params.id)
    // res.render("details-loans")
    res.send('loan id')
})
function get_pending_loans(req,res,next){
view_pending_loan().then((loans)=>{
    res.locals.loans=loans
    next()
}).catch((err)=>{
    res.status(500).send("error fetching pending loans")
})
}
function get_loans(req, res, next){
    view_loan()
    .then((loans)=>{
        res.locals.loans = loans;
        console.log(loans);
        next()
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("Error fetching loans")

    })
}
function post_loan(req, res, next){
    try{
        register_loan(req.body.Customer_ID,req.body.Officer_ID,req.body.Guarantor_ID,req.body.Category ,req.body.amount_applied,req.body.Status)
    }
    catch(err){
        console.log(err)
    }
    next()
}
module.exports = router;