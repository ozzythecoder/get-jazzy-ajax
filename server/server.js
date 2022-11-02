const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./modules/artist.js');
const releaseDates = require('./modules/releaseDates.js');
const songListArray = require('./modules/song.js')

app.use(express.static('server/public'));

// when ajax makes a GET request at /artist, this function will run:
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

app.get('/song', (req, res) => {
  res.send(songListArray);
})

app.get('/release-dates', (req, res) =>{  
  res.send(releaseDates);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});