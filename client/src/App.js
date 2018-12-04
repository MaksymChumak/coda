import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { history } from './store';
import NavBar from './NavBar';
import LeaderBoard from './leaderboard';
import Game from './Game'
import Manual from './manual';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { alertActions } from './actions/alerts';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>

        <Router history={history} >
          <div>
            <NavBar/>
            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
              <Route exact path="/" component={Game} />
              <Route path="/manual" component={Manual} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/login" component={LoginPage} />
              <Route path="/registration" component={RegisterPage} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);
