import React from 'react';

import { Container, Divider } from 'semantic-ui-react';
import ApproveUserCard from './components/ApproveUserCard';

const Home = () => (
  <Container>
    <header><h1>Free Code Camp Philly Showcase</h1></header>
    <Divider></Divider>
    <h3>Approve Users</h3>
    <ApproveUserCard />
  </Container>
)

export default Home;
