import styled from 'styled-components';
import Icon from '../../components/Icon';
import React from 'react';

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
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export {TagsSection};