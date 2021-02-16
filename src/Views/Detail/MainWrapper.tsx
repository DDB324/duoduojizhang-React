import styled from 'styled-components';

const MainWrapper = styled.div`
  overflow-x: hidden;

  > .top {
    padding: 8px;
    color: rgba(0, 0, 0, .2);
    border-bottom: 1px solid rgb(0, 0, 0, .2);
    display: flex;
    font-size: 0.8em;

    > .date {
      margin-right: auto;
    }

    > .income {
      margin-right: 12px;
    }
  }

  > ul {

    > li {
      display: flex;
      padding: 12px 12px;
      justify-content: center;
      align-items: center;

      > .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: #ffda43;
        margin-right: 12px;

        > .icon {
          height: 20px;
          width: 20px;
        }
      }

      > .record-name {
        margin-right: auto;
        position: relative;

        > .vertical-line {
          position: absolute;
          bottom: -16px;
          left: 0;
          height: 1px;
          background: rgba(0, 0, 0, .2);
          width: 1000px;
        }
      }

      > .record-amount {

      }
    }

  }
`;

export {MainWrapper}