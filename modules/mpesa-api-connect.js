var unirest  = require("unirest");
var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials");
 
req.query({
 "grant_type": "client_credentials"
});
 
req.headers({
 "Authorization": "Basic ZDRZMlAyRENWWmdKWTNvM0FidFJONEpKU0tDZVlGRDI6VzhRQkdHeEg3TFpJOVlYRQ"
});
 
req.end(res => {
 if (res.error) throw new Error(res.error);
 console.log(res.body);
const connect_access_token = res.body.access_token
});

const axios=require("axios")

const headers ={
    "Authorization": "Basic ZDRZMlAyRENWWmdKWTNvM0FidFJONEpKU0tDZVlGRDI6VzhRQkdHeEg3TFpJOVlYRQ"
}

const data ={
    ShortCode: 600986,
    ResponseType: 'Completed',
    ConfirmationURL: 'https://mydomain.com/confirmation',
    ValidationURL: 'https://mydomain.com/validation'
}

axios.post('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl', data, { headers})
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });