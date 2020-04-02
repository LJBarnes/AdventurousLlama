import React, { Component } from "react";
import Detail from "../../components/Detail/Detail";
import "./style.css";
import API from '../../utils/API'
class Adventures extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            currentEvent: 0,
            isLoaded: false,
            name: ""
        }
        // this._TogglePrev = this._TogglePrev.bind(this);
        this._ToggleNext = this._ToggleNext.bind(this);
    }


    // When this component mounts, return events within 50 mi of this lat/lon
    componentDidMount() {
        this.getEvents("charlotte");

    }

    getEvents = async query => {
        // $.ajax({
        //     type: "GET",
        //     url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=tWrBBZF24wNK5nm8P7SdsXOxHxs5yXvI&city=" + query + "&radius=50&unit=miles",
        //     async: true,
        //     dataType: "json"
        //})
        const results = await API.events(query)
           
            this.setState({
                events: results.data._embedded.events,
                isLoaded: true,
                currentEvent: 0
            });
        

    };

    _ToggleNext() {
        if (this.state.currentEvent === this.state.events.length - 1)
            return;

        this.setState(prevState => ({
            currentEvent: prevState.currentEvent + 1
        }))
        console.log(this.state.currentEvent)
    }



    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        let { currentEvent, events } = this.state;

        return (
            <div className="Background">
                {/* <Detail event={this.state.events}
                    
                 />
                 {console.log(this.state.events[0].name)} */}
                {/* {console.log(this.state.events[0])} */}
                {/* {this.state.events.map(individualEvent => <Detail event={individualEvent} /> )} */}
                <button className="btn btn-outline-success position" onClick={this._ToggleNext}>Let's Go!</button>
                <br></br>
                <br></br>
                <button style={{ position: "absolute", bottom: "50%", right: "70%", zIndex: "2" }} className="btn btn-outline-danger" onClick={this._ToggleNext}>Hard Pass.</button>

                <Detail event={events[currentEvent]} />

            </div>
        );
    }
}


export default Adventures;