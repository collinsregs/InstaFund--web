const express = require("express");
const router = express.Router();
app.use(express.static('public'));
app.set('view engine','ejs')


router.get("/", (req,res)=>{
    res.render("view-loans")
})

router.get("/new", (req,res)=>{
    res.render("register-loans")
})

router.get("/:id", (req,res)=>{
    console.log(req.params.id)
    res.render("details-loans")
})

module.exports = router;