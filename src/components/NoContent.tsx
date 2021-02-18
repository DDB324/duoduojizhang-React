import Icon from './Icon';
import styled from 'styled-components';

const NoContentWrapper = styled.div`
  color: #cacaca;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;

  > .icon {
    width: 25%;
    height: 25%;
  }

  > div {
    > strong {
      color: #ffda43;
    }
  }
`;

const NoContent = () => {
  return (
    <NoContentWrapper>
      <Icon name='no-content'/>
      <div>本月还没有记过账哦~</div>
      <div>点击下面的<strong>记账</strong>按钮来记一笔把!</div>
    </NoContentWrapper>
  );
};

export {NoContent};