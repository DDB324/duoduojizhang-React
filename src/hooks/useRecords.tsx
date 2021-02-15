import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  category: '+' | '-'
  selectedTagId: number[]
  note: string
  amount: number
  createAt: string//iso 8601
}

//继承某个类型并删除其中的某个属性
type newRecordItem = Omit<RecordItem, 'createAt'>

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
  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };

  return {records, addRecord};
};

export {useRecords};