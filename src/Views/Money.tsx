import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const CategorySection = styled.section`
  background: #ffda43;
  position: relative;

  > ul {
    display: flex;
    font-size: 1.2em;
    justify-content: center;
    align-items: center;

    > li {
      margin: 12px 12px;
      position: relative;

      > span {
        &.selected::after {
          content: '';
          position: absolute;
          display: block;
          bottom: -12.5px;
          left: 0;
          height: 2.5px;
          background: black;
          width: 100%;
        }
      }
    }
  }

  > span {
    position: absolute;
    padding-right: 24px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const TagsSection = styled.section`
  padding: 12px 20px 0;
  overflow: auto;

  > ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      padding: 12px 0;

      > div {
        width: 60px;
        height: 60px;
        background: #f6f5f5;
        border-radius: 50%;
        margin-bottom: 4px;
      }
    }
  }
`;
const NumberPadSection = styled.section`
`;

const Money = () => {
  return (
    <Wrapper>
      <CategorySection>
        <ul>
          <li><span className='selected'>支出</span></li>
          <li><span>收入</span></li>
        </ul>
        <span>取消</span>
      </CategorySection>
      <Main>
        <TagsSection>
          <ul>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
            <li>
              <div>logo</div>
              <span>图表1</span>
            </li>
          </ul>
        </TagsSection>
      </Main>
      <NumberPadSection>
        <span>备注</span>
        <span>100</span>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>日期</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>删除</button>
        <button>完成</button>
      </NumberPadSection>
    </Wrapper>
  );
};

export default Money;