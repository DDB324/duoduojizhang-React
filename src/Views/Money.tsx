import React from 'react';
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

const Money = () => {
  return (
    <Wrapper>
      <CategorySection/>
      <Main>
        <TagsSection/>
      </Main>
      <NumberPadSection/>
    </Wrapper>
  );
};

export default Money;