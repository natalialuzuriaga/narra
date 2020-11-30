//express setup
const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const app = express();

const Port = process.env.Port || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.CONNECT_STRING;
mongoose.connect(uri, {useNewUrlParser = true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo has landed");
})

app.listen(Port, () => console.log("server started"));