import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./style.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Hey there, {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>AdventurousLlama</span> 👍
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Logout
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 center-align blurb"><h3>
              Ready to go on an adventure?</h3>
              <h5>Skip on over to the Find Your Adventure page and start searching
              events by zip code. Don't like the one that's displayed? Just click pass and another will pop up.
            That one seems cool? Click on let's go and add it to your profile. <br />
            Here's the <span style={{ fontFamily: "monospace" }}>coolest</span> thing about AdventurousLlama-- we match you with someone else who wants to go to the same event so you
            can connect and have a buddy to meet up with. You can pass on this too, if you so please. Whatever floats your boat!</h5>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);