import styled from 'styled-components';
import React, {useState} from 'react';
import Icon from '../components/Icon';

//样式
const Wrapper = styled.section`
  background: #ffda43;
  position: relative;

  > header {
    padding: 12px 4px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .left {
      display: flex;
      justify-content: center;
      align-items: center;

      > .icon {
        width: 24px;
        height: 24px;
      }
    }

    > .center {
      font-size: 1.4em;
    }

    > .right {
      width: 56px;
      height: 24px;
    }
  }

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 8px;

    > li {
      text-align: center;
      width: 35%;
      border: 1px solid #333132;
      padding: 4px 0;
      position: relative;

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &.selected {
        background: #333132;
        color: #ffda43;
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

const CategorySettings: React.FC<Props> = (props) => {
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
  return (
    <Wrapper>
      <header>
        <div className='left'>
          <Icon name='left'/>
          返回
        </div>
        <div className='center'>
          标签设置
        </div>
        <div className='right'/>
      </header>
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


export {CategorySettings};