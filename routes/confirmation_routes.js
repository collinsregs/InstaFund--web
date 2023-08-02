const { json } = require("body-parser");
const express = require("express")
const router = express.Router()

const fs = require("fs");
const { type } = require("os");

const logFile = './database/Mpesa_confirmations.json'
const update_on_Mpesa=require("../modules/loan_mpesa_operation");


router.post('/',update_loans_mpesa, (req, res) => {
    // Assuming that Safaricom sends the M-Pesa response in the request body (JSON format)
    const mpesaResponse =  Object.keys(req.body)[0]
  
  
  const turn_to_json= JSON.parse(mpesaResponse)
  const customer_loan_id=turn_to_json.BillRefNumber
  

    // Log the M-Pesa response to a JSON file named "C2bPesaResponse.json"
   
  fs.appendFile(logFile, String(mpesaResponse) + '\n', (err) => {
    if (err) {
      console.error('Error logging M-Pesa response:', err);
    } else {
      console.log('M-Pesa response logged successfully.');
    }
  });
    // Respond to Safaricom with a success message
    const response = {
      ResultCode: 0,
      ResultDesc: 'Confirmation Received Successfully',
    };
  
    res.json(response);
  });
  function update_loans_mpesa(req,res,next) {
    try{ var mpesaMessage_string=Object.keys(req.body)[0]
      var mpesaMessage_json=JSON.parse(mpesaMessage_string)
      var mpesa_amount =mpesaMessage_json.TransAmount
      var paybill_account=mpesaMessage_json.BillRefNumber
      update_on_Mpesa(mpesa_amount,paybill_account)
      }
      catch(err){
        console.error("error on update loans ", err);
      }
next()

  }
  module.exports = router;


  