// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./database/instafund_database.db');


import register_customer from "./modules/register_customer.js";
import register_employee from "./modules/register_employee.js";
import loan_application from "./modules/loan_application.js";




document.getElementById("customer_registration_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to a server
  
    // Access form field values
    var First_Name = document.getElementById("first_name").value;
    var Last_Name = document.getElementById("last_name").value;
    var National_Id = document.getElementById("national_id").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
  
    // Perform desired actions with form data
    console.log(First_Name);
    console.log(Last_Name);
    console.log(National_Id);
    console.log(gender);
  
    // Reset form
    document.getElementById("customer_registration_form").reset();
  
    // Update HTML output
    var output = document.getElementById("output");
    output.textContent = First_Name + " " + Last_Name + " " + gender + " " + National_Id;
    register_customer.register_customer(National_Id,First_Name, Last_Name,gender);
  });
  