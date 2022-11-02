$(document).ready(onReady);

function onReady() {
  // when the DOM loads, ajax will make a GET request at /artist
  // which express will respond to (server.js:51)
  $.ajax({
    type: 'GET',
    url: '/artist'
  }).then(function (response) { // if this request is responded to affirmatively, THEN:
    for (let i = 0; i < response.length; i++) { // loop over the returned array,
      let artist = response[i]; // get the value of each artist in the array,
      // and append it to the DOM. (whew!)
      $('#artistTableBody').append(`
        <tr>
          <td>${artist.name}</td>
          <td>${artist.born}</td>
          <td>${artist.died}</td>
        </tr>
      `) // end append
    } // end for loop
  }) // end ajax

  // ajax request for song data
  $.ajax({ // send GET request at /song
    type: 'GET',
    url: '/song'
  }).then(function (response) { // if request is responded to affirmatively, then:
    for (let song of response) { // loop over array,
      // and append each song to the DOM.
      $('#songTableBody').append(`
        <tr>
          <td>${song.title}</td>
          <td>${song.artist}</td>
        </tr>
      `) // end append
    } // end for loop
  }) // end ajax

  $.ajax({
    type: 'GET',
    url: '/release-dates'
  }).then(function (response) {
    for (let album of response) {
      $('#releaseDateBody').append(`
        <tr>
          <td>${album.title}</td>
          <td>${album.year}</td>
        </tr>
      `)
    } // end for loop
  }) // end ajax

}