import { css } from 'styled-components';
import { color } from 'styles/constants';

const font = css`
  body,
  button,
  input,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    color: ${color.TEXT_PRIMARY};
    font-size: 16px;
  }

  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
    }
  }
`;

export default font;
