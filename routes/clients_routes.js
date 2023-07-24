const express = require("express");
// const { route } = require("./loan_route");
const router = express.Router();


const view_customer=require( "../modules/view_customer.js");


router.get("/", get_clients, (req,res)=>{
    try{
        console.log("viewing customers");
    
        res.render("view-customers", {clients: res.locals.clients})
        }
        catch(err){
            console.log(res.locals.clients)
            console.log(err);
            console.log(err.message);
        }
})

router.get("/new", (req,res)=>{
    res.render("register-customers")
    // res.send("new customers")
})

router.post("/new/submit",(req,res)=>{
    try{
        console.log(req)
        // res.send(req.body.)
        res.send("submitted")
    }
    catch(err){
        console.log(err)
    }

})

router.get("/:id", (req,res)=>{
    console.log(req.params.id)
    res.render("details-customers")
})


function get_clients(req, res, next){
    view_customer()
    .then((clients)=>{
        console.log(clients);
        res.locals.clients = clients;
        // console.log(res.locals);
        next()
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("Error fetching clients")

    })
}
module.exports = router;
