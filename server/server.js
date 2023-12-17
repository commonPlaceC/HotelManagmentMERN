const express = require("express");

const PORT = 5000;
 
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});