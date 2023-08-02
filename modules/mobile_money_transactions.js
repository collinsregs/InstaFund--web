var unirest  = require("unirest");

const axios = require("axios");
 

function promise_access_token( ){
  return new Promise((resolve, reject) => {
    unirest.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials")
      .query({ "grant_type": "client_credentials" })
      .headers({"Authorization": "Basic ZDRZMlAyRENWWmdKWTNvM0FidFJONEpKU0tDZVlGRDI6VzhRQkdHeEg3TFpJOVlYRQ"})
      .end(res => {
        if (res.error) {
          reject(new Error(res.error +" error on getting access token"));
        } else {
          const responseData = JSON.parse(res.raw_body);
          const connect_access_token = responseData.access_token;
          resolve(connect_access_token);
        }
      });
  });
}


async function get_access_token( ){
  try {
    const access= await promise_access_token()
    // console.log("access token from get_access_token() "+access);
    return access;
  } catch (error) {
    console.error('Error from promise:', error);
  }
}
// var access_token= get_access_token();
// console.log(access_token);

 async function register_c2b_url(){
  try {
    const access_token = await get_access_token()
// console.log(access_token);
    const data = {
      ShortCode: 600986,
      ResponseType: 'Completed',
      ConfirmationURL: 'https://b78f-102-68-79-193.ngrok-free.app/confirm',
      ValidationURL: "https://mydomain.com/validation",
    
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    };

    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl', data, { headers });

    // console.log('Response from registration:', response.data);
  } catch (error) {
    console.log(error)
    console.error('Error from register_c2b_url: ', error.response ? error.response.data : error.message);
  }
 }



 async function simulatePayment() {
  try {
  // Replace with the actual access token

    const data = {
      ShortCode: "600986",
      CommandID: "CustomerPayBillOnline",
      Amount: "1", // Replace with the actual amount
      Msisdn: "254708374149", // Replace with the customer's phone number
      BillRefNumber: "1" // Replace with the bill reference number
    };

    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    };

    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate', data, { headers });

    // console.log('Response from simulation:', response.data);
  } catch (error) {
    console.error('Error from simulating payments:', error.response ? error.response.data : error.message);
  }
}

module.exports=register_c2b_url();
// module.exports=simulatePayment();