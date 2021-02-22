import React, {useState} from 'react';
import {Layout} from 'components/Layout';
import Nav from '../components/Nav';
import {Category, CategorySection} from './Money/CategorySection';
import {ChartMain} from './Chart/ChartMain';
import {useRecords} from '../hooks/useRecords';
import dayjs from 'dayjs';
import NP from 'number-precision';
import {option} from './Chart/chartOption';

//显示图表的页面
const Chart = () => {
  //获取当前的category
  const [category, setCategory] = useState<Category>('-');

  //获取所有记账记录中收入或者支出的记账记录
  const {records} = useRecords();
  const categoryRecords = records.filter(record => record.category === category);

  //获取7天的收入或者支出的金额数据
  //dateValue = [{date:'2021-02-01',sumAmount:10},{date:'2021-02-02',sumAmount:0}]
  const dateValue = [];
  for (let i = 0; i < 7; i++) {
    //获取7天中每天的日期
    const date = dayjs().subtract(i, 'day').format('YYYY-MM-DD');
    //找到对应日期的记账数据
    const currentDayRecords = categoryRecords.filter(record => record.createAt === date);
    //将对应的这天的记账数据的所有amount:金额放到数组中
    const currentRecordsAmount = currentDayRecords.map(record => record.amount);
    //将每天的记账金额相加
    const sumAmount = currentRecordsAmount.reduce((sum, n) => NP.plus(sum, n), 0);
    //展示对应的日期的记账总金额
    dateValue.unshift({date, sumAmount});
  }

  //从今天开始向前7天的日期
  //['02-01','02-02'...]
  const showDate = dateValue.map(item => dayjs(item.date).format('MM-DD'));
  //每天的记账金额
  //[5,8,...]
  const showValue = dateValue.map(item => item.sumAmount);

  //找到这7天中所有的收入或者支出的记账数据
  const currentDate = dateValue.map(item => item.date);
  const currentCategoryRecords = categoryRecords.filter(record => currentDate.indexOf(record.createAt) >= 0);

  //计算7天中的总支出或者总收入
  const totalAmount = showValue.reduce((sum, n) => NP.plus(sum, n), 0);
  const averageAmount = NP.divide(totalAmount, 7).toFixed(2);
  return (
    <Layout
      header={
        <CategorySection category={category}
                         onCategoryChange={(category) => {setCategory(category);}}/>
      }
      main={
        <ChartMain option={option(showDate, showValue)}
                   records={currentCategoryRecords}
                   totalAmount={totalAmount}
                   averageAmount={averageAmount}
        />
      }
      footer={
        <div>
          <Nav/>
        </div>
      }
    />
  );
};

export {Chart};