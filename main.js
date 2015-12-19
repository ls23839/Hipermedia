var SpotifyWebApi = require('spotify-web-api-node');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var spotifyApi = new SpotifyWebApi({
  clientId : 'b2b408c48a4b4d09968a6f1c3de82fc9',
  clientSecret : '6d645aed12314d808972f54d0efbef71',
  redirectUri : 'http://localhost:8888/callback'
});






function searchByArtist( artist ){

	spotifyApi.searchArtists(artist)
	.then(function(data) {
		// Que executra un cop tingui resultats
		var html = [];
		for ( var idx in data.body.artists.items){
			var artist = data.body.artists.items[idx];
			console.log(artist);
			html.push('<div><iframe src="https://embed.spotify.com/?uri=' + artist.uri + ' width="300" height="380" frameborder="0" allowtransparency="true"></iframe></div>')
		}
		$('#player').html(html);
	}, function(err) {
		// Error
		console.error(err);
	});
}


var searchByArtistFunc = function(){
	var artist_name = document.getElementById('buscador_text').value
	searchByArtist(artist_name);
}

//ReactDOM.render(<div>HI</div>,document.getElementById("main_div"));


ReactDOM.render(
	<div>
		<div> Buscador:</div>
	  	<input id="buscador_text" type="search" name="search"></input>
	  	<button onClick={searchByArtistFunc} >Search</button>
	 </div>,

  	document.getElementById("buscador"))