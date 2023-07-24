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
});

