import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  category: '+' | '-'
  selectedTagId: number[]
  note: string
  amount: number
}
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  //localstorage获取records
  useEffect(() => {
   setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  //localstorage写入records
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  //增加记账内容
  const addRecord = (record: RecordItem) => {
    setRecords([...records, record]);
  };

  return {records, addRecord};
};

export {useRecords};