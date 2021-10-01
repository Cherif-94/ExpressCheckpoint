// import express
const express = require("express");
// import the middle ware time
const time = require("./middleware/time");
//  create instance express
const app = express();

// middle ware to read the type Json and the body in the request
app.use(time);
app.use(express.static("views"));
// ***************************************************

// create port server
const port = 5000;
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log("server is running succesfully !!!!! ");
});
