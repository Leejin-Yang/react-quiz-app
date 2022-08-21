import styled from 'styled-components';
import { responsive } from 'styles/constants';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

export const Section = styled.section`
  margin-bottom: 30px;
  line-height: 1.6;

  h2 {
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 600;
    font-style: italic;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 10px;

  @media ${responsive('MD')} {
    flex-direction: column;
    row-gap: 10px;
  }
`;
