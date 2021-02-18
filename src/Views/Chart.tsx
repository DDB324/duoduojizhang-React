import React from 'react';
import {Layout} from 'components/Layout';
import Nav from '../components/Nav';

//显示图表的页面
const Chart = () => {
  return (
    <Layout
      header={'施工中'}
      main={undefined}
      footer={Nav()}
    />
  );
};

export {Chart};