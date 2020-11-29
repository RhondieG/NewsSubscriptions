import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/login",
        {
          email: email,
          password: password
        },
        { 
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          } 
        }
      )
      .then(response => {
        this.props.history.push('/chat');
          console.log("res from login", response);
        // if (response.data.logged_in) {
        //   this.props.handleSuccessfulAuth(response.data);
        // }
      })
      .catch(error => { // runs when login fails
        this.setState({loginErrors: error.response.data.error});
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          
          <div>
            {this.state.loginErrors}
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}