import {useEffect, useState} from 'react';
import {createTagId} from '../lib/createId';
import {useUpdate} from './useUpdate';

type Tag = {
  id: number,
  chart: string,
  name: string
}

const defaultIncomeTags = () => [
  {id: createTagId(), chart: 'draw-money', name: '取钱'},
  {id: createTagId(), chart: 'save-money', name: '存钱'},
  {id: createTagId(), chart: 'wage', name: '工资'},
];
const defaultExpenditureTags = () => [
  {id: createTagId(), chart: 'repast', name: '餐饮'},
  {id: createTagId(), chart: 'shopping2', name: '购物'},
  {id: createTagId(), chart: 'airplane', name: '旅行'},
  {id: createTagId(), chart: 'amusement', name: '娱乐'},
  {id: createTagId(), chart: 'cinema', name: '电影'},
  {id: createTagId(), chart: 'game', name: '游戏'},
  {id: createTagId(), chart: 'gift', name: '礼物'},
  {id: createTagId(), chart: 'journey', name: '行李'},
  {id: createTagId(), chart: 'maintain', name: '修理'},
  {id: createTagId(), chart: 'music', name: '音乐'},
  {id: createTagId(), chart: 'sing', name: '唱歌'},
];

//储存被删除的标签
let removeTags: Tag[] = [];

const useTags = () => {
  const [incomeTags, setIncomeTags] = useState<Tag[]>([]);
  const [expenditureTags, setExpenditureTags] = useState<Tag[]>([]);

  //localstorage获取tags数据,只在第一次渲染执行
  useEffect(() => {
    let localIncomeTags = JSON.parse(window.localStorage.getItem('incomeTags') || '[]');
    let localExpenditureTags = JSON.parse(window.localStorage.getItem('expenditureTags') || '[]');
    setIncomeTags(localIncomeTags.length === 0 ? defaultIncomeTags() : localIncomeTags);
    setExpenditureTags(localExpenditureTags.length === 0 ? defaultExpenditureTags() : localExpenditureTags);
  }, []);

  //localstorage写入tags数据
  useUpdate(() => {
    window.localStorage.setItem('expenditureTags', JSON.stringify(expenditureTags));
  }, expenditureTags);

  useUpdate(() => {
    window.localStorage.setItem('incomeTags', JSON.stringify(incomeTags));
  }, incomeTags);

  //合并标签方便查找
  const tags = incomeTags.concat(expenditureTags);

  //增加标签
  const addTag = (category: '+' | '-', chart: string, name: string) => {
    if (tags.map(item => item.name).indexOf(name) >= 0) {
      window.alert('标签名已经存在,请重新输入!');
      return false;
    } else if (name === '') {
      window.alert('标签名不能为空!');
      return false;
    } else if (name.length > 4) {
      window.alert('标签名称不能超过4个字符,请重新输入');
      return false;
    } else {
      const tag: Tag = {id: createTagId(), chart, name};
      if (category === '-') {
        setExpenditureTags([
          ...expenditureTags,
          tag
        ]);
      } else {
        setIncomeTags([
          ...incomeTags,
          tag
        ]);
      }
      return true;
    }
  };

  //删除标签
  const removeTag = (category: '+' | '-', removeTagId: number) => {
    const tagsMap = {'+': incomeTags, '-': expenditureTags};
    const setTagsMap = {'+': setIncomeTags, '-': setExpenditureTags};
    setTagsMap[category](tagsMap[category].filter(tag => tag.id !== removeTagId));
    const tag = tagsMap[category].filter(tag => tag.id === removeTagId)[0];
    removeTags.push(tag);
    window.localStorage.setItem('removedTags', JSON.stringify(removeTags));
  };

  //寻找标签
  const findTag = (tagId: number) => {
    const removedTags = window.localStorage.getItem('removedTags');
    const allTags: Tag[] = (removedTags ? JSON.parse(removedTags) : []).concat(tags);
    return allTags.filter(tag => tag.id === tagId)[0];
  };

  // return {incomeTags: incomeTags ...}
  return {incomeTags, setIncomeTags, expenditureTags, setExpenditureTags, addTag, removeTag, findTag};
};
export {useTags};