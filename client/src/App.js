import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import LeaderBoard from './leaderboard';
import Game from './Game'
import Manual from './manual';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Game} />
          <Route path="/manual" component={Manual} />
          <Route path="/leaderboard" component={LeaderBoard} />
        </Switch>
      </div>
    );
  }
}

export default App;
