const apiKey = 'AIzaSyD6lVuCpxHkLRP6J7QINT8mW5laNmibjhw';
const cx = '84ccc7c65623b462e';
const query = 'cricket';
// const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}`;
// const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}`


const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`;

console.log(apiUrl);

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
    console.log(data.items[0].htmlTitle);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
