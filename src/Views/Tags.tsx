import React, {useState} from 'react';
import {useTags} from '../useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {CategorySettings} from './CategorySettings';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > footer {
    line-height: 50px;
    text-align: center;
    box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, .25);

    > .icon {
      margin: 0 4px;
    }
  }
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  padding: 12px 0 0;

  > ul {
    padding-left: 12px;
    box-shadow: 0 -1px 5px #efefef;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    flex-direction: column;

    > li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 8px 12px 8px 0;
      border-bottom: 1px solid #efefef;

      > div {
        margin: 0 20px 0 12px;
        width: 30px;
        height: 30px;
        background: #f6f5f5;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        > .icon {
          width: 24px;
          height: 24px;
        }
      }

      > span {
        margin-right: auto;
      }

      > button {
        padding: 4px 12px;
        background: #ed736e;
        color: white;
      }
    }
  }
`;

const Tags: React.FC = () => {
  //获取tag数据
  const {expenditureTags, incomeTags} = useTags();

  //声明category变量
  const [category, setCategory] = useState<'-' | '+'>('-');
  return (
    <Wrapper>
      <CategorySettings category={category}
                        onCategoryChange={(category) => {setCategory(category);}}/>
      <Main>
        <ul>
          {
            (category === '-' ? expenditureTags : incomeTags).map(tag => {
              return (
                <li key={tag.chart}>
                  <div>
                    <Icon name={tag.chart}/>
                  </div>
                  <span>{tag.name}</span>
                  <button>删除</button>
                </li>
              );
            })
          }
        </ul>
      </Main>
      <footer>
        <Icon name='add'/>
        {category === '-' ? '添加支出标签' : '添加收入标签'}
      </footer>
    </Wrapper>
  );
};

export {Tags};