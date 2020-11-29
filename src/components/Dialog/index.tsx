import React, { useEffect, useState, KeyboardEvent } from "react";
import { Button, Textarea } from "../styles";
import {
  DialogContainer,
  DialogMessages,
  DialogNewMessage,
  MessageContainer,
  Message,
  NewMessageButton,
  NewMessageInput,
} from "./styles";
import { getThread, sendMessage } from "../../services/threadsService";
import { ContactId } from "../../App";

export type MessageType = {
  id: string;
  owner: boolean;
  text: string;
  createdAt: string; // for simplicity
  status?: "sent" | "delivered" | "read";
};
type DialogProps = {
  activeContactId: ContactId;
  setActiveContactId: (contactId: ContactId) => void;
};
const Dialog = ({ activeContactId, setActiveContactId }: DialogProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [thread, setThread] = useState<MessageType[]>([]);

  useEffect(() => {
    setThread(getThread(activeContactId));
  }, [activeContactId]);

  const handleEnterKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, activeContactId);
    setNewMessage("");

    // In real app I would subscribe for notifications from socket
    setThread(getThread(activeContactId));
  };

  return (
    <DialogContainer>
      <DialogMessages>
        {thread.map((message) => (
          <MessageContainer key={message.id} owner={message.owner}>
            <Message>{message.text}</Message>
          </MessageContainer>
        ))}
      </DialogMessages>
      <DialogNewMessage>
        <NewMessageInput>
          <Textarea
            name="new-message"
            id="new-message"
            rows={1}
            value={newMessage}
            placeholder="Write a message..."
            onChange={(event) => setNewMessage(event.target.value)}
            onKeyDown={handleEnterKeyDown}
          ></Textarea>
        </NewMessageInput>
        <NewMessageButton>
          <Button onClick={handleSendMessage}>Send</Button>
        </NewMessageButton>
      </DialogNewMessage>
    </DialogContainer>
  );
};

export default Dialog;
