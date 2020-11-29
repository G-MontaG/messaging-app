import React from "react";
import { Input } from "../styles";
import { ContactsFilterContainer } from "./styles";

type ContactsFilterProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const ContactsFilter = ({ value, onChange }: ContactsFilterProps) => {
  return (
    <ContactsFilterContainer>
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </ContactsFilterContainer>
  );
};

export default ContactsFilter;
