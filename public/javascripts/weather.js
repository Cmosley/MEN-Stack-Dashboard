var unirest = require("unirest");

var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

req.query({
	"q": "Watauga,tx",
	"lat": "0",
	"lon": "0",
	"callback": "test",
	"id": "2172797",
	"lang": "null",
	"units": "\"metric\" or \"imperial\"",
	"mode": "xml, html"
});

req.headers({
	"x-rapidapi-key": "03fdb05c27msh90f3532d4a48159p127222jsn90d237c7ced7",
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});