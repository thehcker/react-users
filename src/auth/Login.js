import React, { Component } from "react";
import { withFormik } from "formik";

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
    const {
      email,
      password,
      touched,
      errors,
      handleChange,
      handleBlur
    } = this.props;
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
            value={email}
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
            value={password}
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
