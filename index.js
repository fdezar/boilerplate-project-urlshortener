require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');
const urlparser = require('url');
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.URL_DB);

const db = client.db("urlshortener");
const urls = db.collection("urls");

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  // res.sendFile(process.cwd() + '/views/index.html');
  res.sendFile(__dirname + '/views/index.html');
});

// Your first API endpoint

app.post('/api/shorturl', (req, res) => {
  
  const url = req.body.url;

  try {
  const dnslookup = dns.lookup(urlparser.parse(url).hostname, async (err, address) => {
    if(!address || err) {
      res.json({error: "invalid url"});
    } else {
      const urlCount = await urls.countDocuments({})
      const urlDoc = {
        url,
        short_url: urlCount
    };
      const result = await urls.insertOne(urlDoc);
      console.log(result);
      res.json({ original_url: url, short_url: urlCount });
      
    };
  });
   } catch (urlErr) {
      res.json({ error: 'invalid url' }); // Invalid URL format
    }
});

app.get("/api/shorturl/:short_url", async (req, res) => {
  const shortUrl = +req.params.short_url;
  const urlDoc = await urls.findOne({ short_url: shortUrl });
    if (urlDoc) {
    res.redirect(urlDoc.url);
  } else {
    res.json({ error: 'invalid url' }); // Short URL not found in the database
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
