
import axios from "axios";

console.log("HERE API.JS");
export default {
  events: function(query) {
    console.log('query ', query )
    return axios.post('/api/ticket', {query})
    
  }
};
