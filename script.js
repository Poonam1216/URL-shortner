const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app = express()

app.listen((process.env.PORT || 3000), console.log("Server is Connected"))