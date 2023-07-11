import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  text-align: center;
  text-decoration: underline;
  font-size: 38px;
  margin-bottom: 25px;
`;