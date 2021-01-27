import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {CategorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';

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