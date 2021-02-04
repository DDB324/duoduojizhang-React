import {useState} from 'react';

const useTags = () => {
  const [incomeTags, setIncomeTags] = useState<{ chart: string, name: string }[]>(
    [
      {chart: 'draw-money', name: '取钱'},
      {chart: 'save-money', name: '存钱'},
      {chart: 'wage', name: '工资'},
    ]
  );
  const [expenditureTags, setExpenditureTags] = useState<{ chart: string, name: string }[]>(
    [
      {chart: 'repast', name: '餐饮'},
      {chart: 'shopping2', name: '购物'},
      {chart: 'airplane', name: '旅行'},
      {chart: 'amusement', name: '娱乐'},
      {chart: 'cinema', name: '电影'},
      {chart: 'game', name: '游戏'},
      {chart: 'gift', name: '礼物'},
      {chart: 'journey', name: '行李'},
      {chart: 'maintain', name: '修理'},
      {chart: 'music', name: '音乐'},
      {chart: 'sing', name: '唱歌'},
    ]
  );
  // return {incomeTags: incomeTags ...}
  return {incomeTags,setIncomeTags,expenditureTags,setExpenditureTags}
};
export {useTags};