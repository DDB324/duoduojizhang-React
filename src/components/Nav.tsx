import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);

  > ul {
    display: flex;

    > li {
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
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
    </NavWrapper>
  );
};

export default Nav;