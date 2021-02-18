import styled from 'styled-components';
import {gCss} from '../../gCss';

const TagsSettingsFooter = styled.footer`
  line-height: 50px;
  text-align: center;
  box-shadow: ${gCss.topBS};

  > a {
    .icon {
      margin: 0 4px;
    }
  }
`;

export {TagsSettingsFooter};