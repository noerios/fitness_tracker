const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const Workout = require("./userModel")