const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")

const errorMiddleware = require("./Middleware/error")

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', // or use '*' in development for all origins
  credentials: true // if using cookies or auth headers
}));

//Route Imports
const products = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes")

app.use("/api/v1", products)
app.use("/api/v1", user)
app.use("/api/v1", order)

//Middleware for error
app.use(errorMiddleware)

module.exports = app;