import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.div`
  > ul {
    display: flex;

    > li {
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/detail">明细</Link>
            </li>
            <li>
              <Link to="/chart">图表</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}


function Detail() {
  return <h2>明细</h2>;
}

function Chart() {
  return <h2>图表</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

function NoMatch() {
  return <h2>页面不存在吖</h2>;
}


export default App;