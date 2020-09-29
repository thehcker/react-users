import React, { Component } from "react";
import { withFormik } from "formik";

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
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
      confirmPassword,
      touched,
      errors,
      handleChange,
      handleBlur
    } = this.props;
    return (
      <div className="account">
        <h2>Create User Page</h2>
        <form
          className="account-form"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter Your First Name"
            value={firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <div id="feedback">{errors.firstName}</div>
          )}
          <br />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Your Last Name"
            value={lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <div id="feedback">{errors.lastName}</div>
          )}
          <br />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="mobile"
            id="phone"
            name="phone"
            placeholder="Enter Your Phone No."
            value={phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone && (
            <div id="feedback">{errors.phone}</div>
          )}
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
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
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div id="feedback">{errors.password}</div>
          )}
          <br />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div id="feedback">{errors.confirmPassword}</div>
          )}
          <br />
          <br />
          <button className="account-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  }),
  validate: values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (!isNaN(values.firstName)) {
      errors.firstName = "Only text is required";
    } else if (values.firstName.length > 10 || values.firstName.length < 3) {
      errors.firstName = "Must not be more than 10 and not less than 3";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (!isNaN(values.lastName)) {
      errors.lastName = "Only text is required";
    } else if (values.lastName.length > 10 || values.lastName.length < 3) {
      errors.lastName = "Must not be more than 10 and not less than 3";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^[2547]/i.test(values.phone)) {
      errors.phone = "Phone number must start with 2547";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "You need to confirm your password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }
    return errors;
  }
})(Account);
