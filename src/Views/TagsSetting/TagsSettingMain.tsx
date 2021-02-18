import styled from 'styled-components';

const TagsSettingMain = styled.div`
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
export {TagsSettingMain}