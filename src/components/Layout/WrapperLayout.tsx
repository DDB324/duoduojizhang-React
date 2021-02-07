import styled from 'styled-components';

//抽离的布局的样式,用于上下布局,和MainLayout一起使用
const WrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export {WrapperLayout}