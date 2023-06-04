import styled from '@emotion/styled';

export const ButtonMov = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: #4caf50;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
