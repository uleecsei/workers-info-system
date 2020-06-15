const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
import IRepository from  "./DAL/Interfaces/IRepository";

app.use(bodyParser.json());

app.use(cors());

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => {
      console.log("Database connected");
  }).catch((err) => {
      console.log(err);
});

app.listen(process.env.PORT || 8085, () => {
    console.log(`Listening at port ${process.env.PORT || 8085}`);
});

class smth implements IRepository{
    constructor(){
    }
    Hi(){
        
    };
}