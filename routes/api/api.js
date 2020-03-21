function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        // var x = document.getElementById("location");
        // x.innerHTML =
         alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    // var x = document.getElementById("location");
    // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    console.log(latlon);

    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=tWrBBZF24wNK5nm8P7SdsXOxHxs5yXvI&latlong="+latlon+"&radius=50&unit=miles",
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json);
                  var e = document.getElementById("events");
                  e.innerHTML = json.page.totalElements + " events found.";
                  showEvents(json);
                //   initMap(position, json);
               },
      error: function(xhr, status, err) {
                  console.log(err);
               }
    });
    
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


function showEvents(json) {
  for(var i=0; i<json.page.size; i++) {
    // $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
    console.log(json._embedded.events[i].name)
  }
}





getLocation();