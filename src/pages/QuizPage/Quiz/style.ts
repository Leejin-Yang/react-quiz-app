import styled from 'styled-components';

import color from 'styles/constants/color';

export const Container = styled.section``;

export const CustomP = styled.p`
  line-height: 1.6;
  text-transform: capitalize;

  strong {
    font-weight: 500;
  }
`;

export const Question = styled.p`
  margin: 20px 0 40px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
`;

export const AnswerList = styled.ul`
  li + li {
    margin-top: 20px;
  }
`;

export const AnswerItem = styled.li`
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 8px;

  &.correct {
    background-color: ${color.PRIMARY};
  }

  button {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 16px;
  }
`;
