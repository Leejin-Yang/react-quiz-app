import styled from 'styled-components';
import { color, responsive } from 'styles/constants';

export const CustomButton = styled.button`
  width: 90px;
  height: 40px;
  font-size: 16px;
  border: 1px solid ${color.PRIMARY};
  border-radius: 8px;

  &:hover {
    background-color: ${color.PRIMARY};
    border: none;
    color: ${color.TEXT_WHITE};
  }

  @media ${responsive('MD')} {
    width: 180px;
    height: 50px;
  }
`;
