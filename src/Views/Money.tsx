import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

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
          bottom: -12px;
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
`;
const NumberPadSection = styled.section`
`;

const Money = () => {
  return (
    <Layout>
      <CategorySection>
        <ul>
          <li><span className='selected'>支出</span></li>
          <li><span>收入</span></li>
        </ul>
        <span>取消</span>
      </CategorySection>
      <TagsSection>
        <ul>
          <li>图表1</li>
          <li>图表2</li>
          <li>图表3</li>
          <li>图表4</li>
          <li>图表5</li>
          <li>图表6</li>
          <li>图表7</li>
          <li>图表8</li>
          <li>图表9</li>
        </ul>
      </TagsSection>
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
    </Layout>
  );
};

export default Money;