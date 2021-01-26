import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('icons/chart.svg');
require('icons/detail.svg');
require('icons/money.svg');

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
            <svg className={'icon'}>
              <use xlinkHref='#detail'/>
            </svg>
            <span>明细</span>
          </Link>
        </li>
        <li>
          <Link to="/money">
            <svg className={'icon'}>
              <use xlinkHref='#money'/>
            </svg>
            记账
          </Link>
        </li>
        <li>
          <Link to="/chart">
            <svg className={'icon'}>
              <use xlinkHref='#chart'/>
            </svg>
            图表
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;