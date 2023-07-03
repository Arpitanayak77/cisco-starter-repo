import React, { Component } from "react";
import axios from "axios";

class Ipify extends Component {
    state = {
        ipAddress: ""
    };

    componentDidMount() {
        const url = this.props.ipv4 ? "https://api.ipify.org/v4" : "https://api.ipify.org/v6";
        axios.get(url).then(response => {
            this.setState({
                ipAddress: response.data
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Your IP Address</h1>
                <p>{this.state.ipAddress}</p>
            </div>
        );
    }
}

export default Ipify;