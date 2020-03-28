import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../../utils/API";
import Detail from "../../components/Detail";

class Adventures extends Component {
    state = {
    events: []
    };

    // When this component mounts, return events within 50 mi of this lat/lon
    componentDidMount() {
        this.getEvents("44.309662,-73.261215");
    }

    getEvents = query => {
        API.events(query)
            .then(res => this.setState({ events: res.data._embedded.events }))
            .catch(err => console.log(err));
            
            
    };

    

    render() {
        return (
            <div>
                {/* <Detail event={this.state.events}
                    
                 />
                 {console.log(this.state.events[0].name)} */}
                 {console.log(this.state.events[0])}
                 {this.state.events.map(individualEvent => <Detail event={individualEvent} /> )}
                 {/* <Detail event={this.state.events[0]} />  */}
            </div>
        );
    }
}


    export default Adventures;