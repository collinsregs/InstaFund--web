const  express = require('express')
const app = express()
const port = 3000
const client_routes=require("./routes/clients_routes")
const employee_routes=require("./routes/employee_routes")
const loan_routes =require("./routes/loan_route") 

app.use(express.static('public'));
app.set('view engine','ejs')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



app.get('/', (req, res)=>{
  console.log(req.headers)
  console.log("get ejs")
  res.render('view-customers')
  res.end
})
app.get("/login", (req,res)=>{})
app.get("/logout", (req,res)=>{})

app.all('*', (req, res)=>{
  res.status(404).send("<h1>resource not found</h1>")
})

app.use("/customers",client_routes)
app.use("/employee",employee_routes)
app.use("/loans",loan_routes)

// const register_customer=require( "./modules/register_customer.js");
// const register_employee=require( "./modules/register_employee.js");
// const loan_application =require("./modules/loan_application.js");


