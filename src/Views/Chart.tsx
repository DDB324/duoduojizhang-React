import React, {useState} from 'react';
import {Layout} from 'components/Layout';
import Nav from '../components/Nav';
import {Category, CategorySection} from './Money/CategorySection';

//显示图表的页面
const Chart = () => {
  const [category, setCategory] = useState<Category>('-');
  return (
    <Layout
      header={
        <CategorySection category={category}
                         onCategoryChange={(category) => {setCategory(category);}}/>
      }
      main={
        <div>
          <div>Echarts</div>
          <div>详细支出/收入内容</div>
        </div>
      }
      footer={Nav()}
    />
  );
};

export {Chart};