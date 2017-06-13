const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

//Database Connection
mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
    console.log("connected to the database " + config.database)
});

mongoose.connection.on("error", (err) => {
    console.log("connected err " + err)
});


//Express initiated
const app = express();

const users = require("./routes/users");

//Port Number
const port = 3000;

//Cors Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Body Parser Middleware
app.use(bodyParser.json());

app.use("/users", users);

//Index Route
app.get("/",(req, res) => {
    res.send("d")
});

//Start Server
app.listen(port, () =>{
    console.log("listening port no " + port);
});