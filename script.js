const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app = express()

mongoose.connect('mongodb+srv://poonam:<password>@cluster0.m1pp8fi.mongodb.net/',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})





app.listen((process.env.PORT || 3000), console.log("Server is Connected"))