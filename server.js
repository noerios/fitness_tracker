const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const Workout = require("./userModel")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//add api routes



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });