import styled from 'styled-components';
import color from 'styles/constants/color';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100%;
  max-height: 300px;
  background: ${color.BACKGROUND};
  border-radius: 10px;
  transform: translate(-50%, -50%);

  p {
    height: 120px;
    line-height: 120px;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
`;
