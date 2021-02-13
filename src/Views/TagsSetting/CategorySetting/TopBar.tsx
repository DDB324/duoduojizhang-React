import Icon from 'components/Icon';
import React from 'react';
import styled from 'styled-components';

//顶部导航栏,左中右布局,点击左右内容可以实现页面的跳转
const Wrapper = styled.header`
  padding: 12px 4px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffda43;

  > .left {
    display: flex;
    justify-content: center;
    align-items: center;

    > .icon {
      width: 24px;
      height: 24px;
    }
  }

  > .center {
    font-size: 1.4em;
  }

  > .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 24px;
  }
`;

type Props = {
  leftChart: string,
  leftName: string,
  centerName: string,
  rightChart: string,
  rightName: string,
  onRight?: () => void,
  onLeft?:()=>void
}

//如果leftName和rightName要填写多个字,需要修改css中.right的width
const TopBar: React.FC<Props> = (props) => {
  const {leftChart, leftName, centerName, rightChart, rightName, onRight} = props;
  return (
    <Wrapper>
      <div className='left'>
        <Icon name={leftChart}/>
        {leftName}
      </div>
      <div className='center'>
        {centerName}
      </div>
      <div className='right' onClick={() => onRight ? onRight() : undefined}>
        {rightName}
        <Icon name={rightChart}/>
      </div>
    </Wrapper>
  );
};

export {TopBar};