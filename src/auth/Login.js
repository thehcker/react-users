import React, { Component } from "react";
import { withFormik } from "formik";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchData();

    this.setState({
      email: "",
      password: ""
    });
    this.props.history.push("/");
    // alert("Login Attemped");
  };

  fetchData = () => {
    const data = {
      email: this.props.values.email,
      password: this.props.values.password
    };
    console.log(data);
    return new Promise((resolve, reject) => {
      const url = "https://hidden-everglades-98624.herokuapp.com/api/login";
      fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            console.log("JSON: ", response);
            return response.json();
          }
          throw new Error("There was an error in authentication");
        })
        .then(data => {
          resolve(data);
          console.log("Data: ", data);
        })
        .catch(err => {
          reject(err);
          console.log("Error: ", err);
        });
    });
  };

  render() {
    const { values, touched, errors, handleChange, handleBlur } = this.props;
    return (
      <div className="login">
        <h2>Login Page</h2>
        <form className="login-form" method="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="email"> Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <div id="feedback">{errors.email}</div>
          )}
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br />
          <br />
          <button className="login-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validate: values => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email address is invalid";
    }
    return errors;
  }
})(Login);
