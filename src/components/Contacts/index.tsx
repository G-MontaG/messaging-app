import React, { useEffect, useState } from "react";
import { Contact, ContactsContainer } from "./styles";
import ContactsFilter from "./ContactsFilter";
import { getContacts } from "../../services/threadsService";
import { ContactId } from "../../App";

export type ContactType = {
  id: string;
  name: string;
  userPic: React.ReactNode;
};
type ContactsProps = {
  activeContactId: ContactId;
  setActiveContactId: (contactId: ContactId) => void;
};
const Contacts = ({ activeContactId, setActiveContactId }: ContactsProps) => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    setContacts(getContacts());
  }, []);

  const filteredContacts = (contacts: ContactType[]) =>
    contacts.filter((contact) =>
      contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase().trim())
    );

  return (
    <ContactsContainer>
      <ContactsFilter
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      {filteredContacts(contacts).map((contact) => (
        <Contact
          key={contact.id}
          active={contact.id === activeContactId}
          onClick={() => setActiveContactId(contact.id)}
        >
          {contact.name}
        </Contact>
      ))}
    </ContactsContainer>
  );
};

export default Contacts;
