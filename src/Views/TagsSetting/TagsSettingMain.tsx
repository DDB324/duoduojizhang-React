import styled from 'styled-components';
import {gCss} from '../../gCss';

const TagsSettingMain = styled.div`
  flex-grow: 1;
  overflow: auto;
  padding: 12px 0 0;

  > ul {
    padding-left: 12px;
    box-shadow: ${gCss.thinBS};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    > li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 8px 12px 8px 0;
      border-bottom: 1px solid ${gCss.tagBC};

      > div {
        margin: 0 20px 0 12px;
        width: ${gCss.iconSmallBGWH};
        height: ${gCss.iconSmallBGWH};
        background: ${gCss.iconBG};
        border-radius: ${gCss.BR};
        display: flex;
        justify-content: center;
        align-items: center;

        > .icon {
          width: ${gCss.iconSWH};
          height: ${gCss.iconSWH};
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
export {TagsSettingMain};