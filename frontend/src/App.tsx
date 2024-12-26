/** @jsxImportSource @emotion/react */
import React from "react";
import { 
  AppContainer, 
  Title, 
  Section, 
  Footer, 
  MusicIcon, 
  SectionTitle,
  PlusCircleIcon 
} from "./styles"; // Import styles

import SongForm from "./components/SongForm";
import SongsList from "./components/SongsList";
import Statistics from "./components/Statistics";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Title>
        <MusicIcon size={30} color="#2c3e50" /> Song Manager
      </Title>
      <Section>
        <SectionTitle>
          <PlusCircleIcon size={20} color="#2c3e50" /> Add a New Song
        </SectionTitle>
        <SongForm />
      </Section>
      <Section>
        <Statistics />
      </Section>
      <Section>
       <SongsList />
      </Section>
      <Footer>© 2024 Song Manager | All Rights Reserved</Footer>
    </AppContainer>
  );
};

export default App;
