const express = require('express');
const bodyparser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Welcome to Heroku...")
});

app.listen(PORT, () => {
    console.log(`server start on ${PORT}`)
});