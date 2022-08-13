import styled from 'styled-components';
import color from 'styles/constants/color';

export const NoteItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 90px;
  line-height: 1.6;
  border: 1px solid ${color.PRIMARY};
  border-radius: 8px;

  button {
    width: 100%;
    height: 100%;
    padding: 10px 16px 30px;
    text-align: left;
    font-size: 16px;
  }

  p {
    line-height: 1.6;

    strong {
      font-weight: 500;
    }
  }

  p:first-of-type {
    height: 30px;
    margin-bottom: 6px;
  }

  p:last-of-type {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const AnswerItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${color.PRIMARY};

  p {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 300;
    color: ${color.TEXT_WHITE};

    strong {
      font-size: 20px;
      font-weight: 500;
      font-style: italic;
    }
  }
`;
