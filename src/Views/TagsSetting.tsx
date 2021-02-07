import React, {useState} from 'react';
import {useTags} from 'useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {CategorySetting} from './TagsSetting/CategorySetting';
import {Link} from 'react-router-dom';

//可以查看所有标签和删除标签的页面
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > footer {
    line-height: 50px;
    text-align: center;
    box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, .25);

    > a {
      .icon {
        margin: 0 4px;
      }
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

type Tag = {
  id: number,
  chart: string,
  name: string
}

const TagsSetting: React.FC = () => {
  //获取tag数据
  const {expenditureTags, incomeTags, setExpenditureTags, setIncomeTags} = useTags();

  //声明category变量
  const [category, setCategory] = useState<'-' | '+'>('-');

  //删除tag
  const removeTag = (tagId: number) => {
    //声明'+''-'对应的操作
    const categoryMap = {'-': expenditureTags, '+': incomeTags};
    const setCategoryMap = {'-': setExpenditureTags, '+': setIncomeTags};

    //深拷贝tags用来作为新的tags
    const copyTags: Tag[] = JSON.parse(JSON.stringify(categoryMap[category]));

    //找到要删除的tag的下标
    const removedTag = copyTags.filter(item => item.id === tagId)[0];
    const tagIndex = copyTags.indexOf(removedTag);

    //增加确认删除
    if (tagIndex >= 0 && window.confirm('确定要删除当前标签吗?')) {
      copyTags.splice(tagIndex, 1);
      setCategoryMap[category](copyTags);
    }
  };
  return (
    <Wrapper>
      <CategorySetting category={category}
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
                  <button onClick={() => removeTag(tag.id)}>删除</button>
                </li>
              );
            })
          }
        </ul>
      </Main>
      <footer>
        <Link to={'/addTag'}>
          <Icon name='add'/>
          {category === '-' ? '添加支出标签' : '添加收入标签'}
        </Link>
      </footer>
    </Wrapper>
  );
};

export {TagsSetting};