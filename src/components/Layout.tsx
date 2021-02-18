import React from 'react';
import styled from 'styled-components';

const WrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  &.isSafari {
    height: calc(100vh - 75px);
  }
`;

const MainLayout = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props = {
  header: any
  main: any
  footer?: any
}

const Layout = (props: Props) => {
  return (
    <WrapperLayout className={window.localStorage.getItem('isSafari') === '1' ?
      'isSafari' :
      ''}>
      {props.header}
      <MainLayout>
        {props.main}
      </MainLayout>
      {props.footer}
    </WrapperLayout>
  );
};

export {Layout};