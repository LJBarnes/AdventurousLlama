// NOT USING ANYMORE/AT TIS POINT
import axios from "axios";




// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
// const latlon = "";
console.log("HERE API.JS");
// Export an object with a "search" method that returns events from ticketmaster API for the passed query
export default {
  events: function(query) {
    console.log('query ', query )
    return axios.post('/api/ticket', {query})
    
  }
};
