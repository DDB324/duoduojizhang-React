import styled from 'styled-components';

//抽离的数字面板的样式
const WrapperNumberPad = styled.section`
  background: #f3f3f3;

  > .NoteAndOutput {
    display: flex;
    line-height: 50px;
    border-top: 1px solid #cccccc;
    justify-content: space-between;

    > .output {
      padding-right: 12px;
      font-size: 30px;
      flex-shrink: 0;
    }
  }

  > .pad {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #cccccc;

    > button {
      width: 25%;
      height: 64px;
      border-right: 1px solid #cacaca;
      border-bottom: 1px solid #cacaca;
      font-size: 18px;

      &:nth-child(13), &:nth-child(14),
      &:nth-child(15), &:nth-child(16) {
        border-bottom: none;
      }

      &:nth-child(4), &:nth-child(8),
      &:nth-child(12), &:nth-child(16) {
        border-right: none;
      }

      &.ok {
        background: #ffda43;
      }
    }
  }
`;
export {WrapperNumberPad};