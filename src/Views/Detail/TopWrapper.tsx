import styled from 'styled-components';

const TopWrapper = styled.div`
  background: #ffda43;
  background: linear-gradient(180deg, rgba(255, 218, 67, 1) 80%, rgba(255, 255, 255, 1) 100%);

  > main {
    padding: 16px 0;
    text-align: center;

    > img {
      height: 30px;
    }
  }

  > div {
    padding: 0 12px 30px;
    display: flex;

    > .date {
      display: flex;
      flex-direction: column;
      width: 25%;

      > .month {
        height: 40px;
        position: relative;
        overflow: hidden;

        > input {
          background: #ffda43;
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

        > .month-content-wrapper {
          top: 0;
          left: 0;
          background: #ffda43;
          position: absolute;
          pointer-events: none;
          display: flex;
          align-items: flex-end;

          > .month-content {
            font-size: 2em;
          }

          > .triangle {
            margin-left: 4px;
            width: 0;
            height: 0;
            border: 7px solid transparent;
            border-top: 10px solid #333;
          }

          > .vertical-line {
            width: 1px;
            height: 35px;
            background: #333;
            margin-left: 12px;
          }
        }
      }
    }

    > .income {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > .income-content {
        height: 40px;
        display: flex;
        align-items: flex-end;
        font-size: 1.8em;
      }
    }

    > .expenditure {
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > .expenditure-content {
        height: 40px;
        display: flex;
        align-items: flex-end;
        font-size: 1.8em;
      }
    }
  }
`;

export {TopWrapper};