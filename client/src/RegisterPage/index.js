import React from 'react';
import { connect } from 'react-redux';
import "../stylesheets/auth.css"
import { register } from '../actions/user';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.username && user.password) {
            dispatch(register(user));
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
          <div>
            <div id="bg"></div>
            <div class="container">
              <form class="login-form" onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <input placeholder="username" class="username" onChange={this.handleChange} />
                {submitted && !user.username &&
                  <div className="help-block">Username is required</div>
                }
                <input placeholder="password" class="password" onChange={this.handleChange} />
                {submitted && !user.password &&
                  <div className="help-block">Password is required</div>
                }
                <button className="log-in">Register</button>
              </form>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(RegisterPage);