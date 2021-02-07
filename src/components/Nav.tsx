import styled from 'styled-components';
import React from 'react';
import {NavIconLink} from './NavIconLink';
// import {NavLink} from 'react-router-dom';

//3个主页面下面的导航栏的3个按钮
const NavUl = styled.ul`
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  line-height: 24px;
  display: flex;

  > li {
    width: 33.3%;
    padding: 8px 0 4px;
  }
`;

const Nav = () => {
  return (
    <NavUl>
      <li>
        <NavIconLink name='detail' text='明细'/>
      </li>
      <li>
        <NavIconLink name='money' text='记账'/>
      </li>
      <li>
        <NavIconLink name='chart' text='图表'/>
      </li>
    </NavUl>
  );
};

export default Nav;