import styled from 'styled-components';
import color from 'styles/constants/color';

export const CustomButton = styled.button`
  width: 180px;
  height: 50px;
  font-size: 16px;
  border: 1px solid ${color.PRIMARY};
  border-radius: 8px;

  &:hover {
    background-color: ${color.PRIMARY};
    border: none;
    color: ${color.TEXT_WHITE};
  }
`;
