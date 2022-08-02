import styled from 'styled-components';

import color from 'styles/constants/color';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
`;

export const Section = styled.section`
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    font-style: italic;
  }

  & > p {
    margin-top: 10px;
    line-height: 1.6;
  }
`;

export const ListContainer = styled.div`
  height: 600px;
  margin-top: 30px;
  border: 1px solid ${color.PRIMARY};
  padding: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
    height: 4px;
    background-color: rgba(${color.GRAY5}, 0.6);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.GRAY4};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-corner {
    background-color: colors.$BACKGROUND;
  }
`;

export const NoteList = styled.ul`
  li + li {
    margin-top: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  align-self: flex-end;

  button + button {
    margin-left: 10px;
  }
`;
