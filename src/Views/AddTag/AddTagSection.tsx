import styled from 'styled-components';

const AddTagSection = styled.section`
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

        &.selected {
          background: #ffda43;
        }

        > .icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

export {AddTagSection}