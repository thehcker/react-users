import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    alert("Login Attemped");
  };
  //   handleChange = e => {
  //     let { value } = e.target;
  //     console.log(value);
  //     this.setState({
  //       email: value,
  //       password: value
  //     });
  //   };
  render() {
    return (
      <div className="login">
        <h2>Login Page</h2>
        <form className="login-form" method="POST" onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
              value={this.state.email}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
              value={this.state.password}
            />
          </label>
          <br />
          <br />
          <button className="login-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
