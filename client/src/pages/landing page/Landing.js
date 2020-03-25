import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-rainbow-components/components/Button";


class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            Welcome to Adventurous LLama!
                         </h4>
                        <p>Sign in or Register to get started</p>
                        <br />
                        <div className="col s6">
                            {/* link for button to route to register page */}
                            <Link to="/register">
                                <Button
                                    label="Register"
                                    variant="brand"
                                />
                            </Link>
                        </div>
                        <br />
                        <div className="col s6">
                            <Link
                                to="/login">
                                <Button
                                    label="Login"
                                    variant="brand"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;