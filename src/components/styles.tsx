import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.darkText};
  background-color: ${({ theme }) => theme.actionDefault};
  border: 1px solid ${({ theme }) => theme.actionDefault};
  border-radius: 5px;
  padding: 5px;
  min-width: 100px;
  flex: 1;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-out;

  :focus,
  :hover {
    background-color: ${({ theme }) => theme.actionHover};
    border: 1px solid ${({ theme }) => theme.actionHover};
  }
  :active {
    background-color: ${({ theme }) => theme.actionActive};
    border: 1px solid ${({ theme }) => theme.actionActive};
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.lightText};
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  padding: 5px;
  min-width: 150px;
  flex: 1;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.lightText};
  }
`;

export const Textarea = styled.textarea`
  color: ${({ theme }) => theme.lightText};
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  padding: 5px;
  min-width: 200px;
  flex: 1;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.lightText};
  }
`;
