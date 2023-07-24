const express = require("express");
const router = express.Router();

const view_employee=require("../modules/view_employee.js");


router.get("/",get_employees, (req,res)=>{
    try{
        console.log(res.locals.employees);
        console.log("viewing employees");
    
        res.render("view-employees", {employees: res.locals.employees})
        }
        catch(err){
            console.log(res.locals.employees)
            console.log(err);
            console.log(err.message);
        }
})

router.get("/new", (req,res)=>{
    res.render("register-employees")
})

router.get("/:id", (req,res)=>{
    console.log(req.params.id)
    res.render("details-employees")
})


function get_employees(req, res, next){
    view_employee()
    .then((employees)=>{
        console.log(employees);
        res.locals.employees = employees;
        console.log(res.locals);
        next()
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("Error fetching employees")

    })
}

module.exports = router;