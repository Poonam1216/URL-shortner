const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app = express()

mongoose.connect('mongodb+srv://poonam:poonam@cluster0.m1pp8fi.mongodb.net/',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})

app.post('/short_Urls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})




app.listen((process.env.PORT || 3000), console.log("Server is Connected"))