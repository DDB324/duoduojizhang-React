import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';
import NoMatch from './Views/NoMatch';
import Money from './Views/Money';
import Detail from './Views/Detail';
import Chart from './Views/Chart';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/chart">
            <Chart/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Redirect exact from="/" to="/detail"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;