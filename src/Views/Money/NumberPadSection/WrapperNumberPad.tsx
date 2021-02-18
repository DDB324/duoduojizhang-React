import styled from 'styled-components';
import {gCss} from 'gCss';

//抽离的数字面板的样式
const WrapperNumberPad = styled.section`
  background: ${gCss.numberPadBG};

  > .NoteAndOutput {
    display: flex;
    line-height: 50px;
    border-top: 1px solid ${gCss.borderColor};
    justify-content: space-between;

    > .output {
      padding-right: 12px;
      font-size: 2em;
      flex-shrink: 0;
    }
  }

  > .pad {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid ${gCss.borderColor};

    > button {
      width: 25%;
      height: 64px;
      border-right: 1px solid ${gCss.borderColor};
      border-bottom: 1px solid ${gCss.borderColor};
      font-size: 1.2em;

      &:nth-child(13), &:nth-child(14),
      &:nth-child(15), &:nth-child(16) {
        border-bottom: none;
      }

      &:nth-child(4), &:nth-child(8),
      &:nth-child(12), &:nth-child(16) {
        border-right: none;
      }

      &.ok {
        background: ${gCss.BG};
      }

      &.date {
        position: relative;
        overflow: hidden;

        > input {
          background: ${gCss.BG};
          position: absolute;
          left: 0;
          top: 0;
          height: 90%;
          width: 90%;

          ::-webkit-calendar-picker-indicator {
            height: 100%;
            width: 100%;
          }
        }

        > div {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background: ${gCss.BG};
          pointer-events: none;
          line-height: 64px;
          font-size: .8em;
        }
      }
    }
  }
`;
export {WrapperNumberPad};