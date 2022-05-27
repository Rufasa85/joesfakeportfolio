// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) =>
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=OuqBum9VOfdTIFx1QYCxwkx8aQ0pgAt9&limit=20`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
