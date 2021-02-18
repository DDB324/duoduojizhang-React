import Icon from './Icon';
import {NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {gCss} from 'gCss';

const LinkWrapper = styled.div`
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.selected {
      > div {
        background: ${gCss.BG};

        > .icon {
          color: ${gCss.iconSColor};
        }
      }
    }

    > .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10%;

      > .icon {
        color: ${gCss.iconNColor};
        height: ${gCss.iconNWH};
        width: ${gCss.iconNWH};
      }
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
        <div className='wrapper'>
          <Icon name={props.name}/>
        </div>
        {props.text}
      </NavLink>
    </LinkWrapper>
  );
};

export {NavIconLink};