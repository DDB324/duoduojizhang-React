import styled from 'styled-components';

const TopWrapper = styled.div`
  background: #ffda43;
  background: linear-gradient(180deg, rgba(255, 218, 67, 1) 0%, rgba(255, 255, 255, 1) 100%);

  > main {
    padding: 8px 0;
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

      > .month {
        display: flex;
        align-items: flex-end;
        height: 40px;

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

    > .income {
      width: 35%;
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

export {TopWrapper}