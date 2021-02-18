import React, {ChangeEventHandler, useState} from 'react';
import {TopBar} from './TagsSetting/CategorySetting/TopBar';
import Icon from '../components/Icon';
import {amusementTags, foodTags, shoppingTags, studyTags, trafficTags} from '../lib/allTags';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {useTags} from '../hooks/useTags';
import {useGoPage} from '../lib/goPage';
import {Layout} from '../components/Layout';
import {AddTagSection} from './AddTag/AddTagSection';

//新增标签的页面
const InputWrapper = styled.div`
  padding: 4px 12px;
  border-bottom: 1px solid #eaeaea;
`;


const AddTag: React.FC = () => {
  //获取路径的hash值决定显示标题是收入还是支出
  const hash = window.location.hash.split('/')[1] as 'addExpenditureTag' | 'addIncomeTag';
  const hashMap: { addExpenditureTag: '-', addIncomeTag: '+' } = {addExpenditureTag: '-', addIncomeTag: '+'};
  const category = hashMap[hash];

  //储存数据
  const [selected, setSelected] = useState({
    category,
    selectedTagChart: 'diannao',
    tagName: ''
  });

  //遍历标签数据
  const categoryMap = {
    娱乐: amusementTags,
    食物: foodTags,
    购物: shoppingTags,
    学习: studyTags,
    交通: trafficTags
  };
  type Keys = keyof typeof categoryMap
  const categoryList: Keys[] = ['娱乐', '食物', '购物', '学习', '交通'];

  //根据输入内容修改数据中的标签名
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelected({
      ...selected,
      tagName: e.target.value
    });
  };

  //被选择的标签增加selected类
  const getClass = (tag: string) => selected.selectedTagChart === tag ? 'selected' : '';

  //修改新增标签的图标
  const onToggleTag = (selectedTagChart: string) => setSelected({...selected, selectedTagChart});

  //获取封装的ReactHistory
  const {goBack, goTo} = useGoPage();

  //点击完成执行的函数
  const {addTag} = useTags();
  const onComplete = () => {
    const result = addTag(category, selected.selectedTagChart, selected.tagName);
    result && setTimeout(() => goTo('/money'));
  };

  //封装的遍历标签的jsx
  const tagItem = (tag: string) => {
    return (
      <li key={tag} onClick={() => onToggleTag(tag)}>
        <div className={getClass(tag)}>
          <Icon name={tag}/>
        </div>
      </li>
    );
  };

  return (
    <Layout
      header={
        <>
          <TopBar leftChart='left' leftName='返回'
                  centerName={category === '-' ? '添加支出标签' : '添加收入标签'}
                  rightChart='' rightName='完成'
                  onRight={onComplete}
                  onLeft={goBack}/>
          <InputWrapper>
            <Input iconName={selected.selectedTagChart} type='text'
                   placeholder='输入标签名称(不超过4个汉字)' value={selected.tagName}
                   onChange={onChange}/>
          </InputWrapper>
        </>
      }
      main={
        categoryList.map(category => {
          return (
            <AddTagSection key={category}>
              <h3>{category}</h3>
              <ul>
                {
                  categoryMap[category].map(tag => {
                    return tagItem(tag);
                  })
                }
              </ul>
            </AddTagSection>
          );
        })
      }
    />
  );
};

export {AddTag};