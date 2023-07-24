const  express = require('express')
const app = express()
const port = 3000



app.use(express.static('public'));
app.set('view engine','ejs')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// const unirest = require("./modules/mpesa-api-connect")


 



app.get('/', (req, res)=>{
  console.log(req.headers)
  console.log("get ejs")
  res.send('dashboard')
  
})
app.get("/login", (req,res)=>{})
app.get("/logout", (req,res)=>{})


const client_routes=require("./routes/clients_routes")
app.use("/customers",client_routes)

const employee_routes=require("./routes/employee_routes")
app.use("/employees",employee_routes)

const loan_routes =require("./routes/loan_route");
const bodyParser = require('body-parser');
app.use("/loans",loan_routes)

app.all('*', (req, res)=>{
  res.status(404).send("<h1>resource not found</h1>")
})
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render("under-maintenance")
});
// const register_customer=require( "./modules/register_customer.js");
// const register_employee=require( "./modules/register_employee.js");
// const loan_application =require("./modules/loan_application.js");
