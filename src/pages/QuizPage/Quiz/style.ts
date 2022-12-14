import styled from 'styled-components';
import { color, responsive } from 'styles/constants';

export const CustomP = styled.p`
  line-height: 1.6;
  text-transform: capitalize;

  strong {
    font-weight: 500;
  }
`;

export const Question = styled.p`
  margin: 20px 0 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;

  @media ${responsive('MD')} {
    margin: 20px 0 40px;
    font-size: 20px;
  }
`;

export const AnswerList = styled.ul`
  li + li {
    margin-top: 10px;
  }

  @media ${responsive('MD')} {
    li + li {
      margin-top: 20px;
    }
  }
`;

export const AnswerItem = styled.li`
  width: 100%;
  height: 60px;
  line-height: 60px;
  border: 1px solid ${color.PRIMARY};
  border-radius: 8px;

  &:hover {
    background-color: ${color.PRIMARY};
    border: none;

    button {
      color: ${color.TEXT_WHITE};
    }
  }

  button {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 16px;
  }
`;
