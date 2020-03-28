import axios from "axios";

const BASEURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=tWrBBZF24wNK5nm8P7SdsXOxHxs5yXvI&latlong=";
const partTwo= "&radius=50&unit=miles";


// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
// const latlon = "";

// Export an object with a "search" method that returns events from ticketmaster API for the passed query
export default {
  events: function(query) {
    return axios.get(BASEURL + query + partTwo);
  }
};