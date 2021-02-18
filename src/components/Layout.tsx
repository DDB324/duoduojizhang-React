import React from 'react';
import Nav from './Nav';
import {WrapperLayout} from './Layout/WrapperLayout';
import {MainLayout} from './Layout/MainLayout';

type Props = {
  top: any
  main: any
}

const Layout = (props: Props) => {
  return (
    <WrapperLayout className={window.localStorage.getItem('isSafari') === '1' ?
      'isSafari' :
      ''}>
      {props.top}
      <MainLayout>
        {props.main}
      </MainLayout>
      <Nav/>
    </WrapperLayout>
  );
};

export {Layout};