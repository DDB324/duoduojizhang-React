import Icon from './Icon';
import {NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.selected {
      color: red;
    }

    > .icon {
      height: 24px;
      width: 24px;
    }
  }
`;

type Props = {
  name: string,
  text: string,
}
const NavIconLink = (props: Props) => {
  return (
    <LinkWrapper>
      <NavLink to={'/' + props.name} activeClassName='selected'>
        <Icon name={props.name}/>
        {props.text}
      </NavLink>
    </LinkWrapper>
  );
};

export default NavIconLink;