import { css } from 'styled-components';

const container = css`
  position: relative;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1000px;
  width: 100%;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
`;

const mixins = {
  container,
  grid
};

export default mixins;
