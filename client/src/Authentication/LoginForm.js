import React from 'react';
import { login } from '../actions/user';

const LoginForm = ({ error, handleSubmit }) => (

      <div>
        <div id="bg"></div>
        <div class="container">
          <form class="login-form">
            <h1>Sign Up</h1>
            <input placeholder="email" class="email" />
            <input placeholder="password" class="password" />
            <a href="#"><div class="log-in">Log In</div></a>
            <a href="#"><div class="sign-up">Sign Up</div></a>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      </div>
);

export default LoginForm