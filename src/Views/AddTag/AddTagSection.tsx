import styled from 'styled-components';
import {gCss} from '../../gCss';

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
        width: ${gCss.iconNBGWH};
        height: ${gCss.iconNBGWH};
        border-radius: ${gCss.BR};
        margin-bottom: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${gCss.iconBG};

        &.selected {
          background: ${gCss.BG};
        }

        > .icon {
          width: ${gCss.iconNWH};
          height: ${gCss.iconNWH};
        }
      }
    }
  }
`;

export {AddTagSection};