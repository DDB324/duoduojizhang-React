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
    <WrapperLayout>
      {props.top}
      <MainLayout>
        {props.main}
      </MainLayout>
      <Nav/>
    </WrapperLayout>
  );
};

export {Layout};