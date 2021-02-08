import React from 'react';
import {TopBar} from './TagsSetting/CategorySetting/TopBar';
import {WrapperLayout} from '../components/Layout/WrapperLayout';
import {MainLayout} from '../components/Layout/MainLayout';
import Icon from '../components/Icon';
// import {useTags} from '../useTags';
import {amusementTags, foodTags, shoppingTags, studyTags, trafficTags} from '../allIcon';
import styled from 'styled-components';

//新增标签的页面
const AddTagName = styled.div`
  > label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 12px;
    border-bottom: 1px solid #eaeaea;

    > div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-bottom: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffda43;

      > .icon {
        width: 30px;
        height: 30px;
      }
    }

    > input {
      margin-left: 16px;
      height: 48px;
      background: none;
      font-size: inherit;
      flex-grow: 1;
    }

  }
`;

const Section = styled.section`
  > h3 {
    text-align: center;
    line-height: 60px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      padding: 8px 0;

      > div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-bottom: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f6f5f5;

        > .icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
const AddTag: React.FC = () => {
  // const {expenditureTags} = useTags();
  const categoryMap = {
    娱乐: amusementTags,
    食物: foodTags,
    购物: shoppingTags,
    学习: studyTags,
    交通: trafficTags
  };
  type Keys = keyof typeof categoryMap
  const categoryList: Keys[] = ['娱乐', '食物', '购物', '学习', '交通'];
  return (
    <WrapperLayout>
      <TopBar leftChart='left' leftName='返回'
              centerName='添加支出类别'
              rightChart='' rightName='完成'/>
      <AddTagName>
        <label>
          <div>
            <Icon name='diannao'/>
          </div>
          <input type="text" placeholder='输入标签名称(不超过4个汉字)'
          />
        </label>
      </AddTagName>
      <MainLayout>
        {
          categoryList.map(category => {
            return (
              <Section key={category}>
                <h3>{category}</h3>
                <ul>
                  {
                    categoryMap[category].map(tag => {
                      return (
                        <li key={tag.id}>
                          <div>
                            <Icon name={tag.chart}/>
                          </div>
                        </li>
                      );
                    })
                  }
                </ul>
              </Section>
            );
          })
        }
      </MainLayout>
    </WrapperLayout>
  );
};

export {AddTag};