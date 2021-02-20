import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createRecordId} from '../lib/createId';

export type RecordItem = {
  id: number
  category: '+' | '-'
  selectedTagId: number[]
  note: string
  amount: number
  createAt: string//iso 8601
}

//继承某个类型并删除其中的某个属性
type newRecordItem = Omit<RecordItem, 'id'>

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
    const record = {
      ...newRecord,
      id: createRecordId()
    };
    setRecords([...records, record]);
  };

  //删除记账内容
  const removeRecord = (removeRecordId: number) => {
    if (window.confirm('确定要删除当前记录吗?')) {
      setRecords(records.filter(record => record.id !== removeRecordId));
    }
  };

  return {records, addRecord, removeRecord};
};

export {useRecords};