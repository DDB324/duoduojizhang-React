import styled from 'styled-components';
import React from 'react';
import NavLink from './NavIconLink';

const NavUl = styled.ul`
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  line-height: 24px;
  display: flex;

  > li {
    width: 33.3%;
    padding: 4px 0;
  }
`;

const Nav = () => {
  return (
    <NavUl>
      <li>
        <NavLink name='detail' text='明细'/>
      </li>
      <li>
        <NavLink name='money' text='记账'/>
      </li>
      <li>
        <NavLink name='chart' text='图表'/>
      </li>
    </NavUl>
  );
};

export default Nav;