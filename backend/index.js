const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json);
app.use(express.json());

const PORT = process.env.PORT || 5000;

const users = require("./models/userSchma");
const router = require("./routes/router");

app.get("/", (req, res) => {
  res.json("server start");
});

app.listen(PORT, () => {
  console.log(`server is start port number: ${PORT}`);
});
