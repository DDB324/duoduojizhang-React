import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);

  > ul {
    display: flex;

    > li {
      width: 33.3%;
      padding: 4px 0;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > .icon {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/detail">
            <Icon name='detail'/>
            明细
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name='money'/>
            记账
          </Link>
        </li>
        <li>
          <Link to="/chart">
            <Icon name='chart'/>
            图表
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;