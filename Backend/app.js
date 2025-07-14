const express = require("express");
const app = express();

const errorMiddleware = require("./Middleware/error")

app.use(express.json());

//Route Imports
const products = require("./routes/productRoute");

app.use("/api/v1", products)

//Middleware for error
app.use(errorMiddleware)

module.exports = app;