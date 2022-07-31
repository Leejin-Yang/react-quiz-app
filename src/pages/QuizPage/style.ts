import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
`;

export const Section = styled.section`
  margin-bottom: 20px;
  line-height: 1.6;

  h1 {
    font-size: 32px;
    font-weight: 600;
    font-style: italic;
  }
`;