import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useTags} from '../useTags';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

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
    <Wrapper>
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
      <Main>
        <TagsSection selectedTagId={selected.selectedTagId}
                     onTagChange={(selectedTagId: number[]) => onChange({selectedTagId})}
                     tags={selected.category === '-' ? expenditureTags : incomeTags}/>
      </Main>
      {
        selected.selectedTagId.length > 0 &&
        <NumberPadSection note={selected.note}
                          onNoteChange={(note: string) => onChange({note})}
                          amount={selected.amount}
                          onAmountChange={(amount) => onChange({amount})}/>
      }
    </Wrapper>
  );
};

export {Money};