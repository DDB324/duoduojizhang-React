import styled from 'styled-components';
import {gCss} from '../../gCss';

const MainWrapper = styled.div`

  .wrapper {

    > .top {
      padding: 8px;
      color: ${gCss.BNC};
      border-bottom: 1px solid ${gCss.BTC};
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
        position: relative;

        > .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${gCss.iconNWH};
          width: ${gCss.iconNWH};
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
        }

        > .record-amount {

        }

        > .vertical-line {
          position: absolute;
          top: 0;
          right: 0;
          height: 1px;
          background: rgba(0, 0, 0, .2);
          width: 85%;
        }

        &:first-child {
          > .vertical-line {
            background: transparent;
          }
        }
      }
    }
  }
`;

export {MainWrapper};