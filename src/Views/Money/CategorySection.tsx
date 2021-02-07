import styled from 'styled-components';
import React, {useState} from 'react';

//记账页面上面的导航栏,切换收入支出
const Wrapper = styled.section`
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
type Category = '-' | '+';
type Props = {
  category: Category
  onCategoryChange: (category: Category, selectedTagId: number[]) => void
}
const CategorySection: React.FC<Props> = (props) => {
  //category内容的哈希表
  const categoryMap = {'-': '支出', '+': '收入'};

  //获取属性名的类型
  type Keys = keyof typeof categoryMap

  //获取组件外部传来的category
  const category = props.category;

  //声明内部属性categoryList
  const [categoryList] = useState<Keys[]>(['-', '+']);

  //防止多次点击同一个category造成函数多次执行
  const onToggleCategory = (e: React.MouseEvent, c: Category) => {
    if (e.currentTarget.querySelector('span')?.innerHTML !== categoryMap[category]) {
      return props.onCategoryChange(c, []);
    }
  };

  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(c => {
              return (
                <li key={c}
                    onClick={(e) => onToggleCategory(e, c)}>
                  <span className={category === c ? 'selected' : ''}>
                    {categoryMap[c]}
                  </span>
                </li>
              );
            }
          )
        }
      </ul>
      <span>取消</span>
    </Wrapper>
  );
};


export {CategorySection};