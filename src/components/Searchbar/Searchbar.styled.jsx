import styled from '@emotion/styled';

export const Header = styled.header`
  height: 55px;
  width: 100%;
  background-color: #008080;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 10px;
    border-radius: 10px;
  }
`;

export const SearchButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background-color: #4caf50;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
