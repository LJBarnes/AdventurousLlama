import React from "react";

function Detail(props) {
   console.log("details", props);
  return (
    <div className="text-center">
      <img alt={props.event.name} className="img-fluid" src={props.event.images[1].url} style={{ margin: "0 auto" }} />
      <h3>Event: {props.event.name}</h3>
      <h3>Date: {props.event.dates.start.localDate}</h3>
      <h3>Time: {props.event.dates.start.localTime}</h3>
      <h3>Venue: {props.event._embedded.venues[0].name}</h3>
      <h3>Location: {props.event._embedded.venues[0].city.name + ", " + props.event._embedded.venues[0].state.name }</h3>    
    </div>
  );
}

export default Detail;