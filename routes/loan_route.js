const express = require("express");
const router = express.Router();

const view_loan=require("../modules/view_loan");


router.get("/", get_loans,(req,res)=>{
    try{
        console.log("viewing loan");
    
        res.render("view-loans", {loans: res.locals.loans})
        }
        catch(err){
            console.log(res.locals.loans)
            console.log(err);
            console.log(err.message);
        }
})

router.get("/new", (req,res)=>{
    // res.render("register-loans")
    res.send('dashboard')
})

router.get("/:id", (req,res)=>{
    console.log(req.params.id)
    // res.render("details-loans")
    res.send('loan id')
})

function get_loans(req, res, next){
    view_loan()
    .then((loans)=>{
        console.log(loans);
        res.locals.loans = loans;
        // console.log(res.locals);
        next()
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("Error fetching loans")

    })
}
module.exports = router;