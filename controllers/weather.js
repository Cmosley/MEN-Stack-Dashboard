const axios = require("axios").default;

module.exports = {
    current
}

// const options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
//   params: {q: 'Watauga,TX ', days: '3'},
//   headers: {
//     'x-rapidapi-key': '03fdb05c27msh90f3532d4a48159p127222jsn90d237c7ced7',
//     'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
//   }
// };

// axios.request(options)
//     .then(function (response) {
// 	console.log(response.data);})
//     .catch(function (error) {
// 	console.error(error);
// });

function current(req,res) {
    axios
    .get('https://api.weatherapi.com/v1/current.json?key=29eb114a7f1043dbb0c183446213103&q=Watauga,TX&aqi=no')
    .then((response) => {
        console.log(response.data.results);
        res.render("stores/dashboard", {results: response.data.results})
    })
}