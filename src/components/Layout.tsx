import React from 'react';
import {WrapperLayout} from './Layout/WrapperLayout';
import {MainLayout} from './Layout/MainLayout';

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