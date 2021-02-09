import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';
import {NoMatch} from 'Views/NoMatch';
import {Money} from 'Views/Money';
import {Detail} from 'Views/Detail';
import {Chart} from 'Views/Chart';
import {TagsSetting} from 'Views/TagsSetting';
import {AddTag} from 'Views/AddTag';

//配置路由
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
          <TagsSetting/>
        </Route>
        <Route exact path="/addExpenditureTag">
          <AddTag/>
        </Route>
        <Route exact path="/addIncomeTag">
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