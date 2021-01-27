import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
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
          bottom: -11px;
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
        display: flex;
        justify-content: center;
        align-items: center;

        &.selected {
          background: #ffda43;
        }

        > .icon {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
`;
const NumberPadSection = styled.section`
  background: #f3f3f3;

  > .NoteAndOutput {
    display: flex;line-height: 50px;
    border-top: 1px solid #cccccc;justify-content: space-between;


    > label {
      display: flex;align-items: center;
      justify-content: right;flex-grow: 1;

      > .icon {
        width: 1.2em;height: 1.2em;margin: 0 4px;
      }

      > span {
        margin-right: 8px;white-space: nowrap;
      }

      > input {
        height: 48px;background: none;
        font-size: inherit;flex-grow: 1;
        width: 0;
      }
    }

    > .output {
      padding-right: 12px;font-size: 30px;flex-shrink: 0;
    }
  }

  > .pad {
    display: flex;flex-wrap: wrap;border-top: 1px solid #cccccc;

    > button {
      width: 25%;height: 64px;
      border-right: 1px solid #cacaca;
      border-bottom: 1px solid #cacaca;font-size: 18px;

      &:nth-child(13), &:nth-child(14),
      &:nth-child(15), &:nth-child(16) {
        border-bottom: none;
      }

      &:nth-child(4), &:nth-child(8),
      &:nth-child(12), &:nth-child(16) {
        border-right: none;
      }
    }
  }
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
              <div className='selected'>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
            <li>
              <div>
                <Icon name='money'/>
              </div>
              <span>图表1</span>
            </li>
          </ul>
        </TagsSection>
      </Main>
      <NumberPadSection>
        <div className='NoteAndOutput'>
            <label>
              <Icon name='money'/>
              <span>备注:</span>
              <input type="text" placeholder='点击写备注...'/>
            </label>
          <div className='output'>
            <span>100</span>
          </div>
        </div>
        <div className='pad'>
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
        </div>
      </NumberPadSection>
    </Wrapper>
  );
};

export default Money;