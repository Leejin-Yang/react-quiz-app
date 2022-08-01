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

  h1 {
    font-size: 32px;
    font-weight: 600;
    font-style: italic;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 20px;
  line-height: 1.6;
  font-size: 18px;

  strong {
    font-weight: 500;
  }
`;

export const ScoreText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 60px;
  line-height: 60px;
  font-size: 40px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  transform: translate(-50%, -50%);
`;
