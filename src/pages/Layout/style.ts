import styled from 'styled-components';

import color from 'styles/constants/color';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${color.BACKGROUND};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
