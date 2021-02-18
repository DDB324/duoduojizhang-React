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

      &.date {
        position: relative;
        overflow: hidden;

        > input {
          position: absolute;
          left: 0;
          top: 0;
          height: 90%;
          width: 90%;

          ::-webkit-calendar-picker-indicator {
            height: 100%;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 2px;
            box-shadow: inset 0 1px #fff, 0 1px #eee;
            background-color: #eee;
            background-image: -webkit-linear-gradient(top, #f0f0f0, #e6e6e6);
            color: #666;
          }
        }

        > div {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background: #ffda43;
          pointer-events: none;
          line-height: 64px;
          font-size: .8em;
        }
      }
    }
  }
`;
export {WrapperNumberPad};