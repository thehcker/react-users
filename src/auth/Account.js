import React, { Component } from "react";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    alert("Account created successfully");
  };
  render() {
    return (
      <div className="account">
        <h2>Create User Page</h2>
        <form
          className="account-form"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <label>
            First Name:
            <input
              type="text"
              value={this.state.firstName}
              onChange={e =>
                this.setState({
                  firstName: e.target.value
                })
              }
            />
          </label>
          <br />
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={this.state.lastName}
              onChange={e =>
                this.setState({
                  lastName: e.target.value
                })
              }
            />
          </label>

          <br />
          <br />
          <label>
            Phone:
            <input
              type="mobile"
              value={this.state.phone}
              onChange={e =>
                this.setState({
                  phone: e.target.value
                })
              }
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input
              type="email"
              value={this.state.email}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
            />
          </label>
          <br />
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              value={this.state.confirmPassword}
              onChange={e =>
                this.setState({
                  confirmPassword: e.target.value
                })
              }
            />
          </label>
          <br />
          <br />
          <button className="account-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Account;
