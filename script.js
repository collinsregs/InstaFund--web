const updateLoans=require("./modules/loan_transaction");
const runIntervals=require("./modules/loan_transaction"); runIntervals;
const  express = require('express')
const app = express()
const port = 3000
// const mobilePayment= require("./modules/mobile_money_transactions")

app.use(express.static('public'));
app.set('view engine','ejs')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


const {auth}=require("express-openid-connect")
const config = {
  authRequired: true,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'MzKPgKlwumfVLch6IakcIWP7BPCkbEQ4',
  issuerBaseURL: 'https://dev-n6ayoeyocngwbam1.us.auth0.com',

};
app.use(auth(config));
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});




app.get('/', (req, res)=>{
// console.log(req.oidc.isAuthenticated());
  
    res.render("index")


})
// app.get("/login", (req,res)=>{})
// app.get("/logout", (req,res)=>{
//   req.oidc.auth0Logout()
//   res.send("loged out")
// })


app.get("/confirm",(req,res)=>{
  console.log("confirmation")
  res.end

})

const confirm_routes=require("./routes/confirmation_routes")
app.use("/confirm",confirm_routes)





const client_routes=require("./routes/clients_routes")
app.use("/customers",client_routes)

const employee_routes=require("./routes/employee_routes")
app.use("/employees",employee_routes)

const loan_routes =require("./routes/loan_route");

app.use("/loans",loan_routes)

app.all('*', (req, res)=>{
  res.status(404).render("under-maintenance",{error:404} )
})
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render("under-maintenance")
});
// const register_customer=require( "./modules/register_customer.js");
// const register_employee=require( "./modules/register_employee.js");
// const loan_application =require("./modules/loan_application.js");
