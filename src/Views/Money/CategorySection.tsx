import styled from 'styled-components';
import React, {useState} from 'react';

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

const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys =keyof typeof categoryMap
  const [category, setCategory] = useState('-');
  const [categoryList] = useState<Keys[]>(['-', '+']);
  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(c => {
              return (
                <li key={c} onClick={() => setCategory(c)}>
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