import './App.css';
// color 5fe4c9

import React from 'react';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from './Components';
import styled from 'styled-components';
import { Main } from './styles';
import { useLocation } from 'react-router-dom';
import { mockdata } from './utils/mockdata';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;
function App() {

  const location = useLocation();
  return (
    <div className="App">
      {/* <ParticlesBubble/> */}
        <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero data={mockdata.hero} />
      <About data={mockdata.about} />
      <Jobs data={mockdata.Jobs} />
      <Featured data={mockdata.Featured} />
       <Projects data={mockdata.Projects} />
      <Contact data={mockdata.contact} />
    </StyledMainContainer>
  </Layout>

     
    </div>
  )
}

export default App;
