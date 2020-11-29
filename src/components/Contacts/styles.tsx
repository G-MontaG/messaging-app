import styled from "styled-components";

export const ContactsContainer = styled.div`
  width: 250px;
  border-right: 1px solid ${({ theme }) => theme.border};
`;

export const ContactsFilterContainer = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Contact = styled.div<{ active: boolean }>`
  padding: ${({ active }) => (active ? "20px 15px" : "15px")};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme, active }) =>
    active ? theme.active : "initial"};
  cursor: pointer;
  transition: all 0.3s ease-out;
`;
