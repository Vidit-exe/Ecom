const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    //Wrong mongodb Id error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    //Mongoose Duplicate Key Error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered.`
        err = new ErrorHandler(message, 400)
    }

    // JWT error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, try again.`
        err = new ErrorHandler(message, 400)
    }

    //JWT Expire Error
    if (err.name === "TokenExpireError") {
        const message = `Json Web Token is expired, try again.`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}