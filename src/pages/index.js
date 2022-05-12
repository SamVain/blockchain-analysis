import React from 'react';
import Container from 'react-bootstrap/Container'
import Welcome from '../components/Welcome'

const Home = () => {
  return (   
    <Container>
      <div>
        <Welcome />
      </div>
    </Container> 
  );
};

export default Home;