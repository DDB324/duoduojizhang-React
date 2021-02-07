import {useState} from 'react';

type Tag = {
  id:number,
  chart:string,
  name:string
}

const useTags = () => {
  const [incomeTags, setIncomeTags] = useState<Tag[]>(
    [
      {id:1,chart: 'draw-money', name: '取钱'},
      {id:2,chart: 'save-money', name: '存钱'},
      {id:3,chart: 'wage', name: '工资'},
    ]
  );
  const [expenditureTags, setExpenditureTags] = useState<Tag[]>(
    [
      {id:4,chart: 'repast', name: '餐饮'},
      {id:5,chart: 'shopping2', name: '购物'},
      {id:6,chart: 'airplane', name: '旅行'},
      {id:7,chart: 'amusement', name: '娱乐'},
      {id:8,chart: 'cinema', name: '电影'},
      {id:9,chart: 'game', name: '游戏'},
      {id:10,chart: 'gift', name: '礼物'},
      {id:11,chart: 'journey', name: '行李'},
      {id:12,chart: 'maintain', name: '修理'},
      {id:13,chart: 'music', name: '音乐'},
      {id:14,chart: 'sing', name: '唱歌'},
    ]
  );
  // return {incomeTags: incomeTags ...}
  return {incomeTags,setIncomeTags,expenditureTags,setExpenditureTags}
};
export {useTags};