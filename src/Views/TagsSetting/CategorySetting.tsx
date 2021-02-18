import styled from 'styled-components';
import React, {useState} from 'react';
import {TopBar} from './CategorySetting/TopBar';
import {useGoPage} from '../../lib/goPage';
import {gCss} from '../../gCss';

const Wrapper = styled.section`
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 8px;
    background: ${gCss.BG};

    > li {
      text-align: center;
      width: 35%;
      border: 1px solid #333132;
      padding: 4px 0;

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &.selected {
        background: ${gCss.SBG};
        color: ${gCss.BG};
      }
    }
  }
`;

//props的类型声明
type Category = '-' | '+';
type Props = {
  category: Category
  onCategoryChange: (category: Category) => void
}

//在删除标签页面中切换收入和支出标签的页面
const CategorySetting: React.FC<Props> = (props) => {
  //接受的外部数据
  const category = props.category;

  //遍历需要的数据
  const categoryMap = {'-': '支出', '+': '收入'};

  //类型声明
  type Keys = keyof typeof categoryMap

  //遍历需要的数据
  const [categoryList] = useState<Keys[]>(['-', '+']);

  //防止多次点击同一个category造成函数多次执行
  const onToggleCategory = (e: React.MouseEvent, c: Category) => {
    if (e.currentTarget.querySelector('span')?.innerHTML !== categoryMap[category]) {
      return props.onCategoryChange(c);
    }
  };

  //点击返回上一个页面
  const {goBack} = useGoPage();

  return (
    <Wrapper>
      <TopBar leftChart='left' leftName='返回'
              centerName='标签设置'
              rightChart='' rightName=''
              onLeft={goBack}/>
      <ul>
        {
          categoryList.map(c => {
              return (
                <li key={c}
                    onClick={(e) => onToggleCategory(e, c)}
                    className={category === c ? 'selected' : ''}>
                  {categoryMap[c]}
                </li>
              );
            }
          )
        }
      </ul>
    </Wrapper>
  );
};


export {CategorySetting};