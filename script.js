const  express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res)=>{
  res.send('Hello World!')
  res.end("")
})
app.all('*', (req, res)=>{
  res.status(404).send("<h1>resource not found</h1>")
})


const register_customer=require( "./modules/register_customer.js");
const register_employee=require( "./modules/register_employee.js");
const loan_application =require("./modules/loan_application.js");


