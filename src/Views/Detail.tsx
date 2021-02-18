import React, {useState} from 'react';
import {Layout} from 'components/Layout';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {Top} from 'Views/Detail/Top';
import {Main} from './Detail/Main';
import {month, year} from 'lib/date';
import Nav from '../components/Nav';

//显示记账明细的页面
const Detail = () => {
  //获取records
  const {records} = useRecords();

  //日期数据
  const [date, setDate] = useState({
    year: year(),
    month: month()
  });

  //修改日期
  const onDateChange = (obj: { year: string, month: string }) => {setDate(obj);};

  //筛选对应月份的records
  // 数据格式{category:'-',selectedTagId:[1],note:'',amount:10,createAt:'2021-02-01'}
  const currentYearRecords = records.filter(record => record.createAt.split('-')[0] === date.year);
  const currentMonthRecords = currentYearRecords.filter(record => record.createAt.split('-')[1] === date.month);

  //申明按照日期储存数据的hash表
  const hash: { [K: string]: RecordItem[] } = {}; //{02月16日:[record,record]}

  //对记账数据尽心处理,按照日期分类
  currentMonthRecords.forEach(record => {
    const key = record.createAt;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(record);
  });

  //将hash表中的数据对象转换为数组并按照日期的近远排列
  //数据格式[['2021-02-02',Record[]],['2021-02-01',Record[]]]
  const hashMonthRecords = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    return 1;
  });

  //计算总收入总支出的函数
  const value = (records: RecordItem[], category: '+' | '-') => {
    const expenditureArr = records.filter(record => record.category === category).map(x => x.amount);
    return expenditureArr.reduce((sum, n) => sum + n, 0);
  };

  return (
    <Layout
      header={Top({records: currentMonthRecords, value, date, onDateChange})}
      main={Main({records: hashMonthRecords, value})}
      footer={Nav()}
    />
  );
};

export {Detail};