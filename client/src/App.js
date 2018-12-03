import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { history } from './store';
import NavBar from './NavBar';
import LeaderBoard from './leaderboard';
import Game from './Game'
import Manual from './manual';
import LoginPage from './LoginPage';

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      console.log(location)
    });
  }

  render() {
    return (
      <div>

        <Router history={history} >
          <div>
          <NavBar/>
            <Switch>
              <Route exact path="/" component={Game} />
              <Route path="/manual" component={Manual} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
