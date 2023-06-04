import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  place-content: center;

  max-width: calc(100vw);

  margin: 1vh auto;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
