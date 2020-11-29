import styled from "styled-components";

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DialogMessages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MessageContainer = styled.div<{ owner: boolean }>`
  display: flex;
  justify-content: ${({ owner }) => (owner ? "flex-end" : "flex-start")};
  padding: 0 10px 10px 10px;
`;

export const Message = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
`;

export const DialogNewMessage = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const NewMessageInput = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
`;

export const NewMessageButton = styled.div`
  padding: 10px;
  border-left: 1px solid ${({ theme }) => theme.border};
`;
