import React, {useState} from 'react';
import {Layout} from 'components/Layout';
import Nav from '../components/Nav';
import {Category, CategorySection} from './Money/CategorySection';
import {ChartMain} from './Chart/ChartMain';

//显示图表的页面
const Chart = () => {
  const [category, setCategory] = useState<Category>('-');
  return (
    <Layout
      header={
        <CategorySection category={category}
                         onCategoryChange={(category) => {setCategory(category);}}/>
      }
      main={<ChartMain/>}
      footer={Nav()}
    />
  );
};

export {Chart};