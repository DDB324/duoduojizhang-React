import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';

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
  const [selected, setSelected] = useState({
    category: '-' as Category,
    selectedTag: [] as string[],
    note: '',
    amount: 0
  });
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
                       onCategoryChange={(category) => setSelected({
                         ...selected,
                         category
                       })}/>
      <Main>
        <TagsSection selectedTag={selected.selectedTag}
                     onTagChange={(selectedTag: string[]) => setSelected({
                       ...selected,
                       selectedTag
                     })}
        />
      </Main>
      <NumberPadSection note={selected.note}
                        onNoteChange={(note: string) => setSelected({
                          ...selected,
                          note
                        })}
                        amount={selected.amount}
                        onAmountChange={(amount) => setSelected({
                          ...selected,
                          amount
                        })}
      />
    </Wrapper>
  );
};

export default Money;