import styled from 'styled-components';
import Icon from '../../components/Icon';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const TagsSection: React.FC = () => {
    //这里只记录了名字,后面要做另一个页面展示logo,然后设置name,再把logo和name放到数组中展示出来
    const [tags, setTags] = useState<string[]>(['记账', '明细', '图表']);
    return (
      <Wrapper>
        <ul>
          {tags.map(tag => {
            return (
              <li key={tag}>
                <div>
                  <Icon name='detail'/>
                </div>
                <span>{tag}</span>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    );
  }
;

export {TagsSection};