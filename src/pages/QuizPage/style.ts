import styled from 'styled-components';
import { color } from 'styles/constants';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
`;

export const Section = styled.section`
  margin-bottom: 20px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    font-style: italic;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div<{ value: number }>`
  width: 100%;
  height: 4px;
  margin-bottom: 30px;
  background: ${({ value }) =>
    `linear-gradient(to right, ${color.PRIMARY} 0%, ${color.PRIMARY} ${value}%, ${color.GRAY3} ${value}%, ${color.GRAY3} 100%)`};
  border-radius: 4px;
`;
