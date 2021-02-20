import React from 'react';
import styled from 'styled-components';

const WrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;

  &.isSafari {
    height: calc(100vh - 75px);
  }

  @media (min-width: 500px) {
    background: #FCFCFC;
    margin: 0 auto;
    max-width: 375px;
    max-height: 667px;
  }
`;

const MainLayout = styled.div`
  flex-grow: 1;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
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