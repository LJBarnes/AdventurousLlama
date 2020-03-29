import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../../utils/API";
import Detail from "../../components/Detail";

class Adventures extends Component {
    state = {
    events: [],
    isLoaded: false,
    currentEvent: []
    };

    // When this component mounts, return events within 50 mi of this lat/lon
    componentDidMount() {
        this.getEvents("44.309662,-73.261215");
        
    }

    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        // Clone this.state to the newState object
        // We'll modify this object and use it to set our component's state
        const newState = { ...this.state };
    
        if (btnType === "pick") {
          // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
          newState.match = 1 === Math.floor(Math.random() * 5) + 1;
    
          // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
          newState.matchCount = newState.match
            ? newState.matchCount + 1
            : newState.matchCount;
        } else {
          // If we thumbs down'ed the dog, we haven't matched with it
          newState.match = false;
        }
        // Replace our component's state with newState, load the next dog image
        this.setState(newState);
        // ????getEvents goes here?
        this.getEvents();
      };

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
                 <Detail event={this.state.events[0]}/> 
            </div>
        );
    }
}


    export default Adventures;