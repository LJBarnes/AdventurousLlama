import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../../utils/API";
import Detail from "../../components/Detail";

class Adventures extends Component {
    state = {
    events: [],
    // sets the state for isLoaded to false, when we setState, change to true, check for true or false in render
    // if data is loading display "..Loading", if data is loaded display Detail component/data
    isLoaded: false
    };

    // When this component mounts, return events within 50 mi of this lat/lon
    componentDidMount() {
        this.getEvents("44.309662,-73.261215");
        
    }

    getEvents = query => {
        API.events(query)
            .then(res => {this.setState({ events: res.data._embedded.events, isLoaded: true });
            console.log(this.state.events[0]);
        })
            .catch(err => console.log(err));
            
            
    };

    

    render() {
        const {isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div>
                {/* <Detail event={this.state.events}
                    
                 />
                 {console.log(this.state.events[0].name)} */}
                 {/* {console.log(this.state.events[0])} */}
                 {/* {this.state.events.map(individualEvent => <Detail event={individualEvent} /> )} */}
                 <Detail event={this.state.events[0]} /> 
            </div>
        );
    }
}


    export default Adventures;