import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f3f4f6;
  font-family: 'Arial', sans-serif;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Logo src="/logo.png" alt="Dummy Logo" />
      <Heading>Coming Soon</Heading>
      <SubHeading>We're working hard to bring you something amazing. Stay tuned!</SubHeading>
    </Container>
  );
};

export default App;