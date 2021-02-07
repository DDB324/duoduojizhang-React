import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';
import {NoMatch} from './Views/NoMatch';
import {Money} from './Views/Money';
import {Detail} from './Views/Detail';
import {Chart} from './Views/Chart';
import {Tags} from './Views/Tags';
import {AddTag} from './Views/AddTag';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/detail">
          <Detail/>
        </Route>
        <Route exact path="/chart">
          <Chart/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/tags">
          <Tags/>
        </Route>
        <Route exact path="/addTag">
          <AddTag/>
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