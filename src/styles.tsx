import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  color: ${({ theme }) => theme.lightText};
  background-color: ${({ theme }) => theme.background};
  font-family: "Noto Sans JP", sans-serif;
`;
