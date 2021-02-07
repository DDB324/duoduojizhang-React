import React from 'react';
import Nav from './Nav';
import {WrapperLayout} from './Layout/WrapperLayout';
import {MainLayout} from './Layout/MainLayout';

type Props = {
  children: any
}

const Layout = (props: Props) => {
  return (
    <WrapperLayout>
      <MainLayout>
        {props.children}
      </MainLayout>
      <Nav/>
    </WrapperLayout>
  );
};

export {Layout};