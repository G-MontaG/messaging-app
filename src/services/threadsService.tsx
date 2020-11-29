import { ContactId } from "../App";
import { ContactType } from "../components/Contacts";
import { MessageType } from "../components/Dialog";

// Let's imitate backend behavior
export const getContacts = (): ContactType[] => {
  return JSON.parse(localStorage.getItem("contacts") || "[]");
};

export const getThread = (contactId: ContactId): MessageType[] => {
  return JSON.parse(localStorage.getItem(`thread-${contactId}`) || "[]");
};

// Okay, please, do not take this seriously.
// Here should be a socket connection.
export const sendMessage = (text: string, contactId: ContactId) => {
  const previousThread = JSON.parse(
    localStorage.getItem(`thread-${contactId}`) || "[]"
  );
  const lastMessageId = previousThread[previousThread.length - 1].id;
  localStorage.setItem(
    `thread-${contactId}`,
    JSON.stringify([
      ...previousThread,
      {
        id: (+lastMessageId + 1).toString(),
        text,
        createdAt: "01-01-2020",
        status: "sent",
        owner: true,
      },
    ])
  );
};

const isExist = (key: string) => !!localStorage.getItem(key);

export const initStore = () => {
  if (!isExist("contacts"))
    localStorage.setItem(
      "contacts",
      JSON.stringify([
        { id: "1", name: "Blond Thug" },
        { id: "2", name: "Jaqen H'ghar" },
        { id: "3", name: "Arnold Schwarzenegger" },
      ])
    );

  if (!isExist("thread-1"))
    localStorage.setItem(
      "thread-1",
      JSON.stringify([
        {
          id: "1",
          text: "Where is the money? Lebowski?",
          createdAt: "01-01-2020",
          owner: false,
        },
        {
          id: "2",
          text: "Nobody calls me Lebowski.",
          createdAt: "01-01-2020",
          status: "sent",
          owner: true,
        },
        {
          id: "3",
          text: "You got the wrong guy.",
          createdAt: "01-01-2020",
          status: "sent",
          owner: true,
        },
        {
          id: "4",
          text: "I'm the Dude, man.",
          createdAt: "01-01-2020",
          status: "sent",
          owner: true,
        },
        {
          id: "5",
          text: "Your name is Lebowski, Lebowski",
          createdAt: "01-01-2020",
          owner: false,
        },
      ])
    );

  if (!isExist("thread-2"))
    localStorage.setItem(
      "thread-2",
      JSON.stringify([
        {
          id: "1",
          text: "Valar morghulis",
          createdAt: "01-01-2020",
          status: "sent",
          owner: true,
        },
        {
          id: "2",
          text: "Valar dohaeris",
          createdAt: "01-01-2020",
          owner: false,
        },
      ])
    );

  if (!isExist("thread-3"))
    localStorage.setItem(
      "thread-3",
      JSON.stringify([
        {
          id: "1",
          text: "I'll be back",
          createdAt: "01-01-2020",
          owner: false,
        },
      ])
    );
};
