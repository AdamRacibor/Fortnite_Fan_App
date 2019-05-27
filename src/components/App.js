import React, { Component, Suspense, lazy } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
const Navigation = lazy(() => import('./Navigation'));
const Header = lazy(() => import('./Header'));
const News = lazy(() => import('./News'));
const Store = lazy(() => import('./Store'));
const Challenges = lazy(() => import('./Challenges'));
const Stats = lazy(() => import('./Stats'));
const Profil = lazy(() => import('./Profil'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.getCurrentDate(),
    }
  }

  getCurrentDate = () => {
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
      day: date.getDate(),
      month: monthNames[date.getMonth()],
    }
  };

  render() {
    const { date } = this.state;
    return (
      <Router>
        <Suspense fallback={<div>Loading ...</div>}>
          <Navigation />
          <main>
            <Switch>
              <Route path="/" exact component={Header} />
              <Route path="/news" component={() => <News date={date} />} />
              <Route path="/store" component={() => <Store date={date} />} />
              <Route path="/challenges" component={Challenges} />
              <Route path="/stats" component={Stats} />
              <Route path="/profil/:userNick" component={Profil} />
            </Switch>
          </main>
        </Suspense>
      </Router>
    );
  }
}

export default App;
