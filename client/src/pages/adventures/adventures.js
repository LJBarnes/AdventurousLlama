import React, { Component } from "react";
import Detail from "../../components/Detail/Detail";
import "./style.css";
import API from '../../utils/API';
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
class Adventures extends Component {

    constructor(props) {
        super(props);
        

        this.state = {
            events: [],
            currentEvent: 0,
            isLoaded: false,
            currentEvent2: 0
        }
        // this._TogglePrev = this._TogglePrev.bind(this);
        this._ToggleNext = this._ToggleNext.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
    }


    // When this component mounts, return events within 50 mi of this lat/lon
    componentDidMount() {
        this.getEvents("charlotte");

    }

    getEvents = async query => {
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

    saveEvent() {
        const currentEvent = this.state.currentEvent;
        const newEvent = this.state.events[currentEvent].name 
        console.log("save this name: " + newEvent )
        
    }

    

   
    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        let { currentEvent, events } = this.state;

        return (
            <div className="Background">
                <button className="btn btn-outline-success position" onClick={this.saveEvent} >Save This Event!</button>
                <br></br>
                <br></br>
                <button style={{ position: "absolute", bottom: "50%", right: "70%", zIndex: "2" }} className="btn btn-outline-warning" onClick={this._ToggleNext}>Next Event--></button>

                <Detail event={events[currentEvent]} />

            </div>
        );
    }
}


export default Adventures;