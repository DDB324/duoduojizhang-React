import {useState} from 'react';
import {createId} from './lib/createId';

type Tag = {
  id: number,
  chart: string,
  name: string
}

const defaultIncomeTags = [
  {id: createId(), chart: 'draw-money', name: '取钱'},
  {id: createId(), chart: 'save-money', name: '存钱'},
  {id: createId(), chart: 'wage', name: '工资'},
];
const defaultExpenditureTags = [
  {id: createId(), chart: 'repast', name: '餐饮'},
  {id: createId(), chart: 'shopping2', name: '购物'},
  {id: createId(), chart: 'airplane', name: '旅行'},
  {id: createId(), chart: 'amusement', name: '娱乐'},
  {id: createId(), chart: 'cinema', name: '电影'},
  {id: createId(), chart: 'game', name: '游戏'},
  {id: createId(), chart: 'gift', name: '礼物'},
  {id: createId(), chart: 'journey', name: '行李'},
  {id: createId(), chart: 'maintain', name: '修理'},
  {id: createId(), chart: 'music', name: '音乐'},
  {id: createId(), chart: 'sing', name: '唱歌'},
];

const useTags = () => {
  const [incomeTags, setIncomeTags] = useState<Tag[]>(defaultIncomeTags);
  const [expenditureTags, setExpenditureTags] = useState<Tag[]>(defaultExpenditureTags);

  //增加标签
  const addTag = (category: '+' | '-', chart: string, name: string) => {
    const tags = incomeTags.concat(expenditureTags);
    if (tags.map(item => item.name).indexOf(name) >= 0) {
      window.alert('标签名已经存在,请重新输入!');
    } else if (name === '') {
      window.alert('标签名不能为空!');
    } else {
      const tag: Tag = {id: createId(), chart, name};
      if (category === '-') {
        localStorage.setItem('-', JSON.stringify(tag));
        // setExpenditureTags([
        //   ...expenditureTags,
        //   tag
        // ]);
      } else {
        localStorage.setItem('+', JSON.stringify(tag));
        // setIncomeTags([
        //   ...incomeTags,
        //   tag
        // ]);
      }
    }
  };

  //删除标签
  const removeTag = (category: '+' | '-', removeTagId: number) => {
    const tagsMap = {'+': incomeTags, '-': expenditureTags};
    const setTagsMap = {'+': setIncomeTags, '-': setExpenditureTags};
    setTagsMap[category](tagsMap[category].filter(tag => tag.id !== removeTagId));
  };

  //寻找标签
  const findTag = (tagId: number) => {
    const tags = incomeTags.concat(expenditureTags);
    return tags.filter(tag => tag.id === tagId)[0];
  };

  // return {incomeTags: incomeTags ...}
  return {incomeTags, setIncomeTags, expenditureTags, setExpenditureTags, addTag, removeTag, findTag};
};
export {useTags};