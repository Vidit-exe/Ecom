const app = require("./app");
const dotenv = require("dotenv");

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to uncaught exceptions.");
    process.exit(1)
})

//Config
dotenv.config({ path: "backend/config/config.env"} );
const connectDatabase = require("./config/database")
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejections
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled rejections.");
    server.close(() => {
        process.exit(1)
    })
})