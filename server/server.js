const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./modules/artist.js')
const songListArray = require('./modules/song.js')

// const artistListArray = [
//     {
//         name: 'Miles Davis',
//         born: 1926,
//         died: 1990,
//     },
//     {
//         name: 'Duke Ellington',
//         born: 1899,
//         died: 1974,
//     },
//     {
//         name: 'John Coltrane',
//         born: 1926,
//         died: 1987,
//     },
//     {
//         name: 'Louis Daniel Armstrong',
//         born: 1901,
//         died: 1971,
//     },
// ];

// const songListArray = [
//     {
//         title: 'Take Five',
//         artist: 'The Dave Brubeck Quartet',
//     },
//     {
//         title: 'So What',
//         artist: 'Miles Davis',
//     },
//     {
//         title: 'Sing Sing Sing',
//         artist: 'Benny Goodman',
//     },
//     {
//         title: 'Take the "A" Train',
//         artist: 'The Dave Brubeck Quartet',
//     },
// ];

app.use(express.static('server/public'));

// when ajax makes a GET request at /artist, this function will run:
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});


app.get('/song', (req, res) => {
  res.send(songListArray);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});