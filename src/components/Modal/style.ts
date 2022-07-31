import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: levels.$MODAL;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 65%);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
