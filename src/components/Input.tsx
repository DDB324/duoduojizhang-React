import Icon from './Icon';
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;

  > div {
    margin: 0 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffda43;

    > .icon {
      width: 30px;
      height: 30px;
    }
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

type Props = {
  iconName: string,
  spanContent?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const {iconName, spanContent, ...rest} = props;
  return (
    <Label>
      <div>
        <Icon name={props.iconName}/>
      </div>
      {props.spanContent && <span>{props.spanContent}</span>}
      <input {...rest}/>
    </Label>
  );
};

export {Input};