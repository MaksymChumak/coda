import React from 'react';
import {Link} from 'react-router-dom';
import "./stylesheets/header.css";

class NavBar extends React.Component {


  render() {
    return (
      <div>
        <header class="header-fixed">
          <div class="header-limiter">
            <div className = "logo">CODA</div>
            <nav>
              <Link to="/">Game</Link>
              <Link to="/leaderboard">Leaderboard </Link>
              <Link to="/manual">Manual</Link>
              <Link to="/login">Login</Link>
            </nav>
          </div>
        </header>
        <div class="header-fixed-placeholder"></div>
      </div>
    );
  }
}



export default NavBar;