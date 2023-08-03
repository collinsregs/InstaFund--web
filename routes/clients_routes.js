const express = require("express");
const router = express.Router();
router.use(express.static('../public'))


const view_customer=require( "../modules/view_customer.js");
const register_customer = require( "../modules/register_customer.js");


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
    res.render("register-customers",{dialog_visibility: ''} )
    // res.send("new customers")
})

router.post("/new/submit",post_clients,(req,res)=>{
    try{
        console.log(req.body)
        

        res.redirect("/customers/new")
        
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
function post_clients(req, res, next){
    try{
        console.log(req.body)
    var err=register_customer(req.body.National_ID,req.body.First_Name,req.body.Gender)
    console.log(err)
    if(err!=null){
        res.render("under-maintenance",{error:err})
    }

    }
    catch(err){
        console.log((err.message || err.stack))
        res.status(500).send(err.message)
    }
    next()
}
module.exports = router;
