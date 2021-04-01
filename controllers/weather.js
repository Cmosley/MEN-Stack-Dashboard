
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


<form id="add-store-to-user" action="/users/<%= user._id%> method="POST">
            <select name="storeId">
              <%- stores.map(s => 
                `<option value="${s._id}">${s.name}</option>`
              ).join('') %>
            </select>
            <button type="submit">Add to Cast</button>
          </form>
