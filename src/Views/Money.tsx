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
  const {incomeTags, expenditureTags} = useTags();
  const [selected, setSelected] = useState({
    category: '-' as Category,
    selectedTag: [] as string[],
    note: '',
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <Wrapper>
      {selected.category}
      <hr/>
      {selected.selectedTag}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}
      <CategorySection category={selected.category}
                       onCategoryChange={(category, selectedTag) =>
                         onChange({category: category, selectedTag: selectedTag})}/>
      <Main>
        <TagsSection selectedTag={selected.selectedTag}
                     onTagChange={(selectedTag: string[]) => onChange({selectedTag})}
                     tags={selected.category === '-' ? expenditureTags : incomeTags}/>
      </Main>
      {
        selected.selectedTag.length > 0 &&
        <NumberPadSection note={selected.note}
                          onNoteChange={(note: string) => onChange({note})}
                          amount={selected.amount}
                          onAmountChange={(amount) => onChange({amount})}/>
      }
    </Wrapper>
  );
};

export {Money};