import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useTags} from '../useTags';
import {WrapperLayout} from 'components/Layout/WrapperLayout';
import {MainLayout} from 'components/Layout/MainLayout';

type Category = '-' | '+';

const Money = () => {
  //获取的tags
  const {incomeTags, expenditureTags} = useTags();

  //储存数据
  const [selected, setSelected] = useState({
    category: '-' as Category,
    selectedTagId: [] as number[],
    note: '',
    amount: 0
  });

  //接受子组件的参数来修改数据
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  return (
    <WrapperLayout>
      {'category: ' + selected.category}
      <hr/>
      {'selectedTagId: ' + selected.selectedTagId}
      <hr/>
      {'note: ' + selected.note}
      <hr/>
      {'amount: ' + selected.amount}
      <CategorySection category={selected.category}
                       onCategoryChange={(category, selectedTagId) =>
                         onChange({category: category, selectedTagId: selectedTagId})}/>
      <MainLayout>
        <TagsSection selectedTagId={selected.selectedTagId}
                     onTagChange={(selectedTagId: number[]) => onChange({selectedTagId})}
                     tags={selected.category === '-' ? expenditureTags : incomeTags}/>
      </MainLayout>
      {
        selected.selectedTagId.length > 0 &&
        <NumberPadSection note={selected.note}
                          onNoteChange={(note: string) => onChange({note})}
                          amount={selected.amount}
                          onAmountChange={(amount) => onChange({amount})}/>
      }
    </WrapperLayout>
  );
};

export {Money};