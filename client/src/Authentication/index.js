import React from 'react';
import LoginForm from './LoginForm';
import "../stylesheets/auth.css"
class Authentication extends React.Component {


  validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password is too short';
    }

    return errors;
  };


  render() {

    return (
      <LoginForm/>
    );
  }
};


export default Authentication