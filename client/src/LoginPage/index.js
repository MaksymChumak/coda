import React from 'react';
import { connect } from 'react-redux';
import "../stylesheets/auth.css"
import { login } from '../actions/user';
import { logout } from '../actions/user';

class LoginPage extends React.Component {
  constructor(props) {
      super(props);

      // reset login status
      this.props.dispatch(logout());

      this.state = {
          username: '',
          password: '',
          submitted: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { username, password } = this.state;
      const { dispatch } = this.props;
      if (username && password) {
          dispatch(login(username, password));
      }
  }

  render() {
      const { loggingIn } = this.props;
      const { username, password, submitted } = this.state;
      return (
        <div>
          <div id="bg"></div>
          <div className="container">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <h1>Login</h1>
              <input placeholder="username" className="username" name="username" onChange={this.handleChange} />
              {submitted && !username &&
                <div className="help-block">Username is required</div>
              }
              <input placeholder="password" className="password" name="password" onChange={this.handleChange} />
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
              <button className="log-in">Login</button>
            </form>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  const { loggingIn } = state.registration;
  return {
      loggingIn
  };
}



export default connect(mapStateToProps)(LoginPage);