const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//
const app = express();
const port = process.env.PORT || 7500;
const path = require("path");
//
// app.use(cors());

mongoose.Promise = global.Promise;
//
mongoose
  .connect("mongodb://localhost/neighbors")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch(err =>
    console.log("error at connecting MongoDB with Mongoose: ", err)
  );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
