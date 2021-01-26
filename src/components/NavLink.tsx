import Icon from './Icon';
import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.div`
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
`;

type Props = {
  name: string,
  text: string,
}
const NavLink = (props: Props) => {
  return (
    <LinkWrapper>
      <Link to={'/' + props.name}>
        <Icon name={props.name}/>
        {props.text}
      </Link>
    </LinkWrapper>
  );
};

export default NavLink;