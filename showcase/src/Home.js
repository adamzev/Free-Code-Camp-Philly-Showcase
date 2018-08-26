import React from 'react';

import { Container, Divider } from 'semantic-ui-react';
import ShortUserCard from './components/ShortUserCard';

const Home = () => (
  <Container>
    <Divider></Divider>
    <h3>Approve Users</h3>
    <ShortUserCard />
  </Container>
)

export default Home;
