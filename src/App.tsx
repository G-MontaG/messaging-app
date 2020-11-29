import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { AppContainer } from "./styles";
import Contacts from "./components/Contacts";
import Dialog from "./components/Dialog";
import { initStore } from "./services/threadsService";

export type ContactId = string;
const App = () => {
  const [activeContactId, setActiveContactId] = useState<ContactId>("1");

  initStore();

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Contacts
          activeContactId={activeContactId}
          setActiveContactId={setActiveContactId}
        />
        <Dialog
          activeContactId={activeContactId}
          setActiveContactId={setActiveContactId}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
