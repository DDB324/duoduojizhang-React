import Icon from './Icon';
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: right;
  flex-grow: 1;

  > .icon {
    width: 1.2em;
    height: 1.2em;
    margin: 0 4px;
  }

  > span {
    margin-right: 8px;
    white-space: nowrap;
  }

  > input {
    height: 48px;
    background: none;
    font-size: inherit;
    flex-grow: 1;
    width: 0;
  }
`;

const Input = () => {
  return (
    <Label>
      <Icon name='money'/>
      <span>备注:</span>
      <input type="text" placeholder='点击写备注...'/>
    </Label>
  );
};

export {Input};