import styled from 'styled-components';
import Icon from 'components/Icon';
import React, {useRef} from 'react';
import {Link} from 'react-router-dom';

//记账页面显示所有标签和新增标签按钮的内容
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
          width: 36px;
          height: 36px;
        }
      }
    }
  }
`;
type Props = {
  selectedTagId: number[]
  onTagChange: (selectedTagId: number[]) => void
  tags: { id: number, chart: string, name: string }[]
}
const TagsSection: React.FC<Props> = (props) => {
    //被选取的tag
    const selectedTagId = props.selectedTagId;

    //获取到的tags
    const tags = props.tags;

    //切换选择的tag并传到组件外面
    const onToggleTag = (tagId: number) => {
      const index = selectedTagId?.indexOf(tagId);
      if (index >= 0) {
        props.onTagChange([]);
      } else {
        props.onTagChange([tagId]);
      }
    };

    //修改被选中的tag的背景
    const getClass = (tagId: number) => selectedTagId?.indexOf(tagId) >= 0 ? 'selected' : '';

    //获取Link元素
    const textLink = useRef(null);

    //点击新增标签之后模拟点击Link标签触发a标签
    const handleClick = () => {
      (textLink.current! as HTMLElement).click();
    };

    return (
      <Wrapper>
        <ul>
          {tags.map(tag => {
            return (
              <li key={tag.id} onClick={() => onToggleTag(tag.id)}>
                <div className={getClass(tag.id)}>
                  <Icon name={tag.chart}/>
                </div>
                <span>{tag.name}</span>
              </li>
            );
          })}
          <li onClick={handleClick}>
            <div>
              <Icon name='money'/>
            </div>
            <span>新增标签</span>
            <Link ref={textLink} to={'/tags'}/>
          </li>
        </ul>
      </Wrapper>
    );
  }
;

export {TagsSection};